<?php

namespace JK\MediaBundle\Tests;

use JK\MediaBundle\Tests\Kernel\TestKernel;
use Symfony\Component\HttpKernel\KernelInterface;

class TestCase extends \PHPUnit\Framework\TestCase
{
    protected function createKernel(): KernelInterface
    {
        $kernel = new TestKernel('test', true);
        $kernel->boot();

        return $kernel;
    }

    /**
     * Assert that the given service class is configured in the services.yaml.
     */
    protected function assertServiceExists(string $serviceId)
    {
        $kernel = $this->createKernel();
        $container = $kernel->getContainer();

        $this->assertTrue($container->has($serviceId));
    }
}
