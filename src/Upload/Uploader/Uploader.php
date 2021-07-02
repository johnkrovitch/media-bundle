<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Uploader;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Event\MediaEvent;
use JK\MediaBundle\Event\MediaEvents;
use JK\MediaBundle\Upload\Path\PathResolverInterface;
use League\Flysystem\FilesystemOperator;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use function Symfony\Component\String\u;

class Uploader implements UploaderInterface
{
    private string $publicPath;
    private PathResolverInterface $pathResolver;
    private FilesystemOperator $mediaStorage;
    private EventDispatcherInterface $eventDispatcher;

    public function __construct(
        string $publicPath,
        PathResolverInterface $pathResolver,
        FilesystemOperator $mediaStorage,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->pathResolver = $pathResolver;
        $this->mediaStorage = $mediaStorage;
        $this->eventDispatcher = $eventDispatcher;
        $this->publicPath = $publicPath;
    }

    public function upload(UploadedFile $uploadedFile, MediaInterface $media): void
    {
        // Get the upload path according to the media type
        $path = $this->pathResolver->resolve(
            $uploadedFile->getClientOriginalName(),
            $media->getType()
        );
        $publicPath = u($this->publicPath)->ensureEnd('/')->append($path)->toString();

        $media->setName(u($uploadedFile->getClientOriginalName())->beforeLast('.')->toString());
        $media->setFileType($uploadedFile->getClientOriginalExtension());
        $media->setFileName(u($path)->afterLast('/')->toString());
        $media->setSize($uploadedFile->getSize());
        $media->setPath($publicPath);

        $this->eventDispatcher->dispatch(new MediaEvent($media), MediaEvents::MEDIA_UPLOAD);
        $this->mediaStorage->write($path, $uploadedFile->getContent());
        $this->eventDispatcher->dispatch(new MediaEvent($media), MediaEvents::MEDIA_UPLOADED);
    }
}
