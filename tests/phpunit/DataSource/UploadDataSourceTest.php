<?php

namespace JK\MediaBundle\Tests\DataSource;

use JK\MediaBundle\DataSource\Context\FormContext;
use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\DataSource\UploadDataSource;
use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadDataSourceTest extends TestCase
{
    private UploadDataSource $dataSource;
    private MockObject $mediaRepository;
    private MockObject $uploader;

    public function testSupports(): void
    {
        $context = new FormContext(MediaInterface::DATASOURCE_COMPUTER);
        $this->assertTrue($this->dataSource->supports($context));
    }

    public function testGet(): void
    {
        $file = new UploadedFile(__DIR__.'/../../fixtures/My Media.jpg', 'My Media.jpg');
        $context = new FormContext(MediaInterface::DATASOURCE_COMPUTER, [
            'uploaded_file' => $file,
            'media_type' => 'my_thumbnail_type',
        ]);
        $media = new Media();

        $this
            ->mediaRepository
            ->expects($this->once())
            ->method('create')
            ->willReturn($media)
        ;
        $this
            ->mediaRepository
            ->expects($this->once())
            ->method('add')
            ->with($media)
        ;
        $this
            ->uploader
            ->expects($this->once())
            ->method('upload')
            ->with($file, $media)
        ;

        $expected = $this->dataSource->get($context);
        $this->assertEquals('my_thumbnail_type', $expected->getType());
    }

    public function testGetWithoutSupports(): void
    {
        $context = new FormContext('wrong_name');
        $this->expectException(MediaException::class);
        $this->dataSource->get($context);
    }

    public function testGetWithWrongContext(): void
    {
        $context = new FormContext(MediaInterface::DATASOURCE_COMPUTER);
        $this->expectException(MediaException::class);
        $this->dataSource->get($context);
    }

    public function testGetCollection(): void
    {
        $file = new UploadedFile(__DIR__.'/../../fixtures/My Media.jpg', 'My Media.jpg');
        $context = new FormContext(MediaInterface::DATASOURCE_COMPUTER, [
            'uploaded_files' => [$file],
            'media_type' => 'my_thumbnail_type',
        ]);
        $media = new Media();

        $this
            ->mediaRepository
            ->expects($this->exactly(1))
            ->method('create')
            ->willReturn($media)
        ;
        $this
            ->mediaRepository
            ->expects($this->once())
            ->method('add')
            ->with($media)
        ;

        $this
            ->uploader
            ->expects($this->once())
            ->method('upload')
            ->with($file, $media)
        ;

        $results = $this->dataSource->getCollection($context);
        $this->assertCount(1, $results);
        $this->assertEquals($results[0], $media);
    }

    public function testGetCollectionWithoutSupports(): void
    {
        $context = new FormContext('wrong_name');
        $this->expectException(MediaException::class);
        $this->dataSource->getCollection($context);
    }

    public function testGetCollectionWithWrongContext(): void
    {
        $context = new FormContext(MediaInterface::DATASOURCE_COMPUTER);
        $this->expectException(MediaException::class);
        $this->dataSource->getCollection($context);
    }

    protected function setUp(): void
    {
        $this->mediaRepository = $this->createMock(MediaRepositoryInterface::class);
        $this->uploader = $this->createMock(UploaderInterface::class);
        $this->dataSource = new UploadDataSource($this->mediaRepository, $this->uploader);
    }
}
