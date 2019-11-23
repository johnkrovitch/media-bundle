<?php

namespace JK\MediaBundle\Upload\Uploader;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Factory\MediaFactoryInterface;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class Uploader implements UploaderInterface
{
    /**
     * @var string
     */
    private $thumbnailUploadDirectory;

    /**
     * @var Filesystem
     */
    private $fileSystem;

    /**
     * @var MediaFactoryInterface
     */
    private $mediaFactory;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(
        string $thumbnailUploadDirectory,
        MediaFactoryInterface $mediaFactory,
        EntityManagerInterface $entityManager
    ) {
        $this->thumbnailUploadDirectory = $thumbnailUploadDirectory;
        $this->fileSystem = new Filesystem();
        $this->mediaFactory = $mediaFactory;
        $this->entityManager = $entityManager;
    }

    public function upload(UploadedFile $uploadedFile, string $type): void
    {
        // Get the upload directory according to the wanted media type
        $uploadDirectory = $this->getUploadDirectory($type);

        // Ensure the upload directory exists
        $this->fileSystem->mkdir($uploadDirectory);

        // Move the uploaded file to the dedicated upload directory
        $file = $uploadedFile->move($uploadDirectory, uniqid().'.'.$uploadedFile->guessExtension());

        // Create the associated media
        $media = $this->mediaFactory->create($file, $type);
        $this->entityManager->persist($media);
        $this->entityManager->flush();
    }

    /**
     * @param string $type
     *
     * @return string
     *
     * @throws Exception
     */
    private function getUploadDirectory(string $type): string
    {
        if (MediaInterface::TYPE_ARTICLE_THUMBNAIL === $type) {
            return $this->thumbnailUploadDirectory;
        }

        throw new Exception('The media type "'.$type.'" is not valid');
    }
}
