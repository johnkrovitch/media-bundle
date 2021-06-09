<?php

namespace JK\MediaBundle\Tests\Upload\Uploader;

use Doctrine\ORM\EntityManagerInterface;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Event\MediaEvent;
use JK\MediaBundle\Factory\MediaFactoryInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
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
    private MockObject $mediaRepository;
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
            ->with('my_type')
            ->willReturn('/custom/upload/path')
        ;
        $this
            ->eventDispatcher
            ->expects($this->exactly(2))
            ->method('dispatch')
            ->willReturnCallback(function (MediaEvent $event, string $eventName) {
                $this->assertEquals('/custom/upload/path', $event->getMedia()->getPath());
                $this->assertEquals('png', $event->getMedia()->getType());
                $this->assertEquals('', $event->getMedia()->getName());
                $this->assertEquals('', $event->getMedia()->getDescription());
                $this->assertEquals('', $event->getMedia()->getFileName());
            })
        ;

        $uploadedFile = new UploadedFile('/tmp/My File.png', 'My File.png', null, null, true);
        $this->uploader->upload($uploadedFile, 'my_type');
    }

    protected function setUp(): void
    {
        $this->pathResolver = $this->createMock(PathResolverInterface::class);
        $this->mediaStorage = $this->createMock(FilesystemOperator::class);
        $this->mediaRepository = $this->createMock(MediaRepositoryInterface::class);
        $this->eventDispatcher = $this->createMock(EventDispatcherInterface::class);
        $this->uploader = new Uploader(
            $this->pathResolver,
            $this->mediaStorage,
            $this->mediaRepository,
            $this->eventDispatcher
        );
    }
}
