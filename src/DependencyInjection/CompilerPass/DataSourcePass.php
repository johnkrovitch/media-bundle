<?php

declare(strict_types=1);

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
        $dataSources = [];

        foreach ($taggedServices as $id => $tags) {
            foreach ($tags as $attributes) {
                $dataSources[$attributes['datasource_name']] = new Reference($id);
            }
        }
        $registryDefinition->replaceArgument('$dataSources', $dataSources);
    }
}
