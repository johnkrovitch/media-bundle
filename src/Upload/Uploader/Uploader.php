<?php

namespace JK\MediaBundle\Upload\Uploader;

use Exception;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Factory\MediaFactoryInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use LAG\Component\StringUtils\StringUtils;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class Uploader implements UploaderInterface
{
    /**
     * @var string
     */
    private $uploadDirectory;

    /**
     * @var Filesystem
     */
    private $fileSystem;

    /**
     * @var MediaFactoryInterface
     */
    private $factory;

    /**
     * @var array
     */
    private $mapping;

    /**
     * @var MediaRepositoryInterface
     */
    private $repository;

    public function __construct(
        string $uploadDirectory,
        MediaFactoryInterface $factory,
        MediaRepositoryInterface $repository,
        array $mapping = []
    ) {
        $this->uploadDirectory = $uploadDirectory;
        $this->fileSystem = new Filesystem();
        $this->factory = $factory;
        $this->mapping = $mapping;
        $this->repository = $repository;
    }

    public function upload(UploadedFile $uploadedFile, ?string $type): MediaInterface
    {
        // Get the upload directory according to the wanted media type
        $uploadDirectory = $this->getAbsoluteUploadDirectory($type);

        // Ensure the upload directory exists
        $this->fileSystem->mkdir($uploadDirectory);

        // Move the uploaded file to the dedicated upload directory
        $extension = str_replace($uploadedFile->guessExtension(), 'jpeg', 'jpg');
        $file = $uploadedFile->move($uploadDirectory, uniqid().'.'.$extension);

        // Create the associated media
        $media = $this->factory->create($file, $type);
        $this->repository->save($media);

        return $media;
    }

    private function getAbsoluteUploadDirectory(string $type): string
    {
        if (!key_exists($type, $this->mapping)) {
            throw new Exception('The media type "'.$type.'" is not valid: no mapping available');
        }
        $directory = $this->uploadDirectory;

        if (!StringUtils::endsWith($directory, '/')) {
            $directory .= '/';
        }

        return $directory.$this->mapping[$type];
    }
}
