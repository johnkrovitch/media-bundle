<?php

namespace JK\MediaBundle\Tests\Kernel;

use Doctrine\Bundle\DoctrineBundle\DoctrineBundle;
use JK\MediaBundle\JKMediaBundle;
use JK\MediaBundle\Tests\DependencyInjection\PublicServicePass;
use Oneup\UploaderBundle\OneupUploaderBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;

class TestKernel extends Kernel
{
    protected function build(ContainerBuilder $container)
    {
        $container->addCompilerPass(new PublicServicePass());
    }

    public function registerBundles()
    {
        $bundles = [
            // Dependencies
            new FrameworkBundle(),

            new DoctrineBundle(),
            new TwigBundle(),
            // My Bundle to test
            new JKMediaBundle(),
            new OneupUploaderBundle(),
        ];

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        // We don't need that Environment stuff, just one config
        $loader->load(__DIR__.'/../Fixtures/config/config.yaml');
        $loader->load(__DIR__.'/../../../src/Resources/config/services.yaml');
    }
}
