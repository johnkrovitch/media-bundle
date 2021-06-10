<?php

namespace JK\MediaBundle\Tests\Kernel;

use Doctrine\Bundle\DoctrineBundle\DoctrineBundle;
use JK\MediaBundle\JKMediaBundle;
use JK\MediaBundle\Tests\DependencyInjection\PublicServicePass;
use League\FlysystemBundle\FlysystemBundle;
use Liip\ImagineBundle\LiipImagineBundle;
use Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle;
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

    public function registerBundles(): array
    {
        return [
            new FrameworkBundle(),
            new SensioFrameworkExtraBundle(),
            new DoctrineBundle(),
            new TwigBundle(),
            new LiipImagineBundle(),
            new FlysystemBundle(),
            new JKMediaBundle(),
        ];
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        // We don't need that Environment stuff, just one config
        $loader->load(__DIR__.'/../Fixtures/config/config.yaml');
        $loader->load(__DIR__.'/../../../src/Resources/config/services.yaml');
    }
}
