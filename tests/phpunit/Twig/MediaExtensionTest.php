<?php

namespace JK\MediaBundle\Tests\Twig;

use JK\MediaBundle\Assets\Path\PublicPathResolverInterface;
use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Twig\Extension\MediaExtension;
use PHPUnit\Framework\MockObject\MockObject;

class MediaExtensionTest extends TestCase
{
    private MediaExtension $extension;
    private MockObject $pathResolver;

    public function testService(): void
    {
        $this->assertServiceExists(MediaExtension::class);
    }

    public function testGetMediaPath(): void
    {
        $media = new Media();
        $this
            ->pathResolver
            ->expects($this->once())
            ->method('resolve')
            ->with($media)
        ;
        $this->extension->getMediaPath($media);
    }

    protected function setUp(): void
    {
        $this->pathResolver = $this->createMock(PublicPathResolverInterface::class);
        $this->extension = new MediaExtension($this->pathResolver);
    }
}
