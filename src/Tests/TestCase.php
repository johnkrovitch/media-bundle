<?php

namespace JK\MediaBundle\Tests;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class TestCase extends \PHPUnit\Framework\TestCase
{
    /**
     * Assert that the given service class is configured in the services.yaml
     *
     * @param string $serviceClass
     */
    protected function assertServiceExists(string $serviceClass)
    {
        $containerBuilder = new ContainerBuilder();
        $locator = new FileLocator([
            __DIR__.'/../Resources/config/services',
        ]);
        $loader = new YamlFileLoader($containerBuilder, $locator);
        $loader->load('controllers.yaml');
        $loader->load('factories.yaml');
        $loader->load('forms.yaml');
        $loader->load('uploaders.yaml');
        $exists = false;

        foreach ($containerBuilder->getDefinitions() as $definition) {
            if ($serviceClass === $definition->getClass()) {
                $exists = true;
            }
        }
        $this->assertTrue($exists, 'The service "'.$serviceClass.'"does not exists');
    }
}
