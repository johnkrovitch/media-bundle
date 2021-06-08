<?php

declare(strict_types=1);

namespace JK\MediaBundle\DependencyInjection\CompilerPass;

use JK\MediaBundle\DataSource\DataSourceInterface;
use JK\MediaBundle\Form\Type\DataSourceCollectionType;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

/** @deprecated  */
class DataSourcePass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container): void
    {
        return;
        $this->registerDataSources($container);
        $this->registerDataSourceFormTypes($container);
    }

    private function registerDataSources(ContainerBuilder $container): void
    {
        $taggedServices = $container->findTaggedServiceIds('jk_media.datasource');
        $registryDefinition = $container->getDefinition(DataSourceInterface::class);
        $dataSources = [];

        foreach ($taggedServices as $id => $tags) {
            foreach ($tags as $attributes) {
                $dataSources[$attributes['datasource']] = new Reference($id);
            }
        }
        $registryDefinition->replaceArgument('$dataSources', $dataSources);
    }

    private function registerDataSourceFormTypes(ContainerBuilder $container): void
    {
        $taggedServices = $container->findTaggedServiceIds('jk_media.datasource_form');
        $registryDefinition = $container->getDefinition(DataSourceCollectionType::class);
        $dataSources = [];

        foreach ($taggedServices as $id => $tags) {
            foreach ($tags as $attributes) {
                $dataSources[$attributes['datasource']] = new Reference($id);
            }
        }
        $registryDefinition->replaceArgument('$dataSourceTypes', $dataSources);
    }
}
