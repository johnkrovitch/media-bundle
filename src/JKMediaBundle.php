<?php

declare(strict_types=1);

namespace JK\MediaBundle;

use JK\MediaBundle\DependencyInjection\CompilerPass\DataSourcePass;
use JK\MediaBundle\DependencyInjection\JKMediaExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class JKMediaBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        $container->addCompilerPass(new DataSourcePass());
    }

    protected function createContainerExtension(): JKMediaExtension
    {
        return new JKMediaExtension();
    }
}
