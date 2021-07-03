<?php

namespace JK\MediaBundle\Tests\Upload\Uploader;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Event\MediaEvent;
use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Upload\Path\PathResolverInterface;
use JK\MediaBundle\Upload\Uploader\Uploader;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use League\Flysystem\FilesystemOperator;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderTest extends TestCase
{
    private MockObject $pathResolver;
    private MockObject $mediaStorage;
    private MockObject $eventDispatcher;
    private Uploader $uploader;

    public function testService(): void
    {
        $this->assertServiceExists(Uploader::class);
        $this->assertServiceExists(UploaderInterface::class);
    }

    public function testUpload(): void
    {
        $this
            ->pathResolver
            ->expects($this->once())
            ->method('resolve')
            ->with('My Media.jpg', 'my_type')
            ->willReturn('custom/path/my_media.jpg')
        ;
        $media = new Media();

        $this
            ->eventDispatcher
            ->expects($this->exactly(2))
            ->method('dispatch')
            ->willReturnCallback(function (MediaEvent $event, string $eventName) {
                $this->assertEquals('/uploads/custom/path/my_media.jpg', $event->getMedia()->getPath());
                $this->assertEquals('my_type', $event->getMedia()->getType());
                $this->assertEquals('My Media', $event->getMedia()->getName());
                $this->assertEquals('', $event->getMedia()->getDescription());
                $this->assertEquals('my_media.jpg', $event->getMedia()->getFileName());

                return $event;
            })
        ;

        $this
            ->mediaStorage
            ->expects($this->once())
            ->method('write')
            ->with('custom/path/my_media.jpg')
        ;

        $uploadedFile = new UploadedFile(__DIR__.'/../../../fixtures/My Media.jpg', 'My Media.jpg');
        $media->setType('my_type');
        $this->uploader->upload($uploadedFile, $media);
    }

    protected function setUp(): void
    {
        $this->pathResolver = $this->createMock(PathResolverInterface::class);
        $this->mediaStorage = $this->createMock(FilesystemOperator::class);
        $this->eventDispatcher = $this->createMock(EventDispatcherInterface::class);
        $this->uploader = new Uploader(
            '/uploads',
            $this->pathResolver,
            $this->mediaStorage,
            $this->eventDispatcher
        );
    }
}
