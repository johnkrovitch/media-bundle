<?php

namespace JK\MediaBundle\Tests\Twig;

use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Twig\Extension\MediaExtension;

class MediaExtensionTest extends TestCase
{
    public function testService(): void
    {
        $this->assertServiceExists(MediaExtension::class);
    }
}
