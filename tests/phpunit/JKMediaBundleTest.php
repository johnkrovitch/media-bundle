<?php

namespace JK\MediaBundle\Tests;

use JK\MediaBundle\JKMediaBundle;
use JK\MediaBundle\Tests\Kernel\TestKernel;
use PHPUnit\Framework\TestCase;

class JKMediaBundleTest extends TestCase
{
    public function testBuild(): void
    {
        $kernel = new TestKernel('test', true);
        $kernel->boot();
        $this->assertContains(JKMediaBundle::class, $kernel->getContainer()->getParameter('kernel.bundles'));
    }
}
