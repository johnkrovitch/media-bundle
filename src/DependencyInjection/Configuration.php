<?php

namespace JK\MediaBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('jk_media');

        $treeBuilder
            ->getRootNode()
            ->children()
                ->scalarNode('upload_path')->defaultValue('%kernel.project_dir%/public/uploads')->end()
                ->arrayNode('mapping')
                    ->defaultValue([])
                    ->scalarPrototype()
                    ->end()
                ->end()
            ->end()
        ->end();

        return $treeBuilder;
    }
}
