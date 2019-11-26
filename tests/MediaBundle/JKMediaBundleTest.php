<?php

namespace JK\MediaBundle\Tests;

use JK\MediaBundle\Tests\Kernel\TestKernel;
use PHPUnit\Framework\TestCase;

class JKMediaBundleTest extends TestCase
{
    public function testBuild()
    {
        $kernel = new TestKernel('test', true);
        $kernel->boot();
    }
}
