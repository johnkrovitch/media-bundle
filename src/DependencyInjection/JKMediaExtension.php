<?php

namespace JK\MediaBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class JKMediaExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new YamlFileLoader($container, new FileLocator([
            __DIR__.'/../Resources/config',
        ]));
        $loader->load('services.yaml');
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('jk_media.upload_path', $config['upload_path']);
        $container->setParameter('jk_media.mapping', $config['mapping']);
    }

    public function getAlias()
    {
        return 'jk_media';
    }
}
