<?php

declare(strict_types=1);

namespace JK\MediaBundle\DependencyInjection;

use JK\MediaBundle\Form\Extension\TinyMceExtension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class JKMediaExtension extends Extension implements PrependExtensionInterface
{
    public function load(array $configs, ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator([
            __DIR__.'/../Resources/config',
        ]));
        $loader->load('services.yaml');
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('jk_media.upload_path', $config['upload_path']);
        $container->setParameter('jk_media.mapping', $config['mapping']);
        $container->setParameter('jk_media.admin_bundle_enabled', \array_key_exists('LAGAdminBundle', $container->getParameter('kernel.bundles')));

        $this->addOptionalFormTypeExtension($container);
    }

    public function prepend(ContainerBuilder $container): void
    {
        $configs = $container->getExtensionConfig($this->getAlias());
        $resolvingBag = $container->getParameterBag();
        $configs = $resolvingBag->resolveValue($configs);
        $config = $this->processConfiguration(new Configuration(), $configs);

        $container->setParameter('jk_media.upload_path', $config['upload_path']);

        $container->prependExtensionConfig('twig', [
            'form_themes' => ['@JKMedia/form/theme.html.twig'],
        ]);
        $container->prependExtensionConfig('flysystem', [
            'storages' => [
                'media.storage' => [
                    'adapter' => 'local',
                    'options' => [
                        'directory' => $config['upload_path'],
                    ],
                ],
            ],
        ]);
    }

    public function getAlias(): string
    {
        return 'jk_media';
    }

    private function addOptionalFormTypeExtension(ContainerBuilder $container): void
    {
        if (!$container->getParameter('jk_media.admin_bundle_enabled')) {
            return;
        }

        $container
            ->setDefinition(
                TinyMceExtension::class,
                (new Definition(TinyMceExtension::class))
                    ->setAutoconfigured(true)
                    ->setAutowired(true)
            )
        ;
    }
}
