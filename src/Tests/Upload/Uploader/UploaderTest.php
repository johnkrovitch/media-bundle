<?php

namespace JK\MediaBundle\Tests\Upload\Uploader;

use Doctrine\ORM\EntityManagerInterface;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Factory\MediaFactoryInterface;
use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Upload\Uploader\Uploader;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderTest extends TestCase
{
    public function testService()
    {
        $this->assertServiceExists(Uploader::class);
        $this->assertServiceExists(UploaderInterface::class);
    }

    public function testUpload()
    {
        list($uploader) = $this->createUploader();

        $uploadedFile = $this->createMock(UploadedFile::class);

        $uploader->upload($uploadedFile, MediaInterface::TYPE_ARTICLE_THUMBNAIL);
    }

    /**
     * @return Uploader[]|MockObject[]
     */
    private function createUploader(): array
    {
        $mediaFactory = $this->createMock(MediaFactoryInterface::class);
        $entityManager = $this->createMock(EntityManagerInterface::class);
        $uploader = new Uploader('/', $mediaFactory, $entityManager);

        return [
            $uploader,
        ];
    }
}
