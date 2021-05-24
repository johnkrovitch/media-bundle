<?php

namespace JK\MediaBundle;

use JK\MediaBundle\DependencyInjection\JKMediaExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class JKMediaBundle extends Bundle
{
    protected function createContainerExtension(): JKMediaExtension
    {
        return new JKMediaExtension();
    }
}
