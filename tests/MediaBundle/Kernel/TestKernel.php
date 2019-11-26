<?php

namespace JK\MediaBundle\Tests\Kernel;

use Doctrine\Bundle\DoctrineBundle\DoctrineBundle;
use JK\MediaBundle\JKMediaBundle;
use Oneup\UploaderBundle\OneupUploaderBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;

class TestKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            // Dependencies
            new FrameworkBundle(),
            new DoctrineBundle(),
            new TwigBundle(),
            // My Bundle to test
            new JKMediaBundle(),
            new OneupUploaderBundle(),
        );

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        // We don't need that Environment stuff, just one config
        $loader->load(__DIR__.'/../Fixtures/config/config.yaml');
        $loader->load(__DIR__.'/../../../src/Resources/config/services.yaml');
    }
}
