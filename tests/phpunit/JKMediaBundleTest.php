<?php

namespace JK\MediaBundle\Tests;

use JK\MediaBundle\Tests\Kernel\TestKernel;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Routing\Loader\YamlFileLoader;
use Symfony\Component\Routing\RouteCollectionBuilder;
use Symfony\Component\Yaml\Yaml;

class JKMediaBundleTest extends TestCase
{
    public function testBuild()
    {
        $kernel = new TestKernel('test', true);
        $kernel->boot();
        $container = $kernel->getContainer();

        $fileLocator = new FileLocator();
        $loader = new YamlFileLoader($fileLocator);
        $routes = new RouteCollectionBuilder($loader);
        $routes->import(__DIR__.'/../../src/Resources/config/routing/routing.yaml');
        $routes = $routes->build();

        foreach ($routes->all() as $name => $route) {
            $controller = $route->getDefault('_controller');
            $this->assertTrue( $container->has($controller), 'The controller service "'.$controller.'" is not found');
        }
        $finder = new Finder();
        $finder
            ->in(__DIR__.'/../../src/Resources/config/services')
            ->files()
        ;
        $services = [];

        foreach ($finder as $file) {
            $data = Yaml::parseFile($file->getRealPath());
            $services = array_merge($services, $data['services'] ?? []);
        }

        foreach ($services as $id => $service) {
            if ('_defaults' === $id) {
                continue;
            }
            $this->assertTrue($container->has($id), 'The service "'.$id.'" is not found');
            $container->get($id);
        }
    }
}
