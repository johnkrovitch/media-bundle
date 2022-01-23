<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Event\MediaEvent;
use JK\MediaBundle\Event\MediaEvents;
use JK\MediaBundle\Path\Generator\PathGeneratorInterface;
use League\Flysystem\FilesystemOperator;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use function Symfony\Component\String\u;

class Uploader implements UploaderInterface
{
    public function __construct(
        private PathGeneratorInterface $pathGenerator,
        private FilesystemOperator $mediaStorage,
        private EventDispatcherInterface $eventDispatcher
    ) {
    }

    public function upload(UploadedFile $uploadedFile, MediaInterface $media): void
    {
        $relativePath = $this->pathGenerator->generatePath($uploadedFile->getClientOriginalName(), $media->getType());

        $fileName = u($relativePath)->afterLast('/')->toString();
        $extension = u($relativePath)->afterLast('.')->toString();

        $media->setName($uploadedFile->getClientOriginalName());
        $media->setFileType($extension);
        $media->setFileName($fileName);
        $media->setSize($uploadedFile->getSize());
        $media->setPath($relativePath);

        $this->eventDispatcher->dispatch(new MediaEvent($media), MediaEvents::MEDIA_UPLOAD);
        $this->mediaStorage->write($relativePath, $uploadedFile->getContent());
        $this->eventDispatcher->dispatch(new MediaEvent($media), MediaEvents::MEDIA_UPLOADED);
    }
}
