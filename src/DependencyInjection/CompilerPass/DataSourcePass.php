<?php

namespace JK\MediaBundle\DependencyInjection\CompilerPass;

use JK\MediaBundle\DataSource\DataSourceInterface;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class DataSourcePass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        $taggedServices = $container->findTaggedServiceIds('jk_media.datasource');
        $registryDefinition = $container->getDefinition(DataSourceInterface::class);
        $ids = [];

        foreach ($taggedServices as $id => $tags) {
            foreach ($tags as $attributes) {
                $ids[$attributes['datasource_name']] = $id;
            }
        }
        $registryDefinition->replaceArgument('$dataSources', array_map(function ($id) {
            return new Reference($id);
        }, $ids));
    }
}
