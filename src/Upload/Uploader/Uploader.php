<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Uploader;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Event\MediaEvent;
use JK\MediaBundle\Event\MediaEvents;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Path\PathResolverInterface;
use League\Flysystem\FilesystemOperator;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use function Symfony\Component\String\u;

class Uploader implements UploaderInterface
{
    private PathResolverInterface $pathResolver;
    private FilesystemOperator $mediaStorage;
    private MediaRepositoryInterface $mediaRepository;
    private EventDispatcherInterface $eventDispatcher;

    public function __construct(
        PathResolverInterface $pathResolver,
        FilesystemOperator $mediaStorage,
        MediaRepositoryInterface $mediaRepository,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->pathResolver = $pathResolver;
        $this->mediaStorage = $mediaStorage;
        $this->mediaRepository = $mediaRepository;
        $this->eventDispatcher = $eventDispatcher;
    }

    public function upload(UploadedFile $uploadedFile, ?string $type): MediaInterface
    {
        // Get the upload path according to the media type
        $path = $this->pathResolver->resolve(
            $uploadedFile->getClientOriginalName(),
            $type
        );
        $media = $this->mediaRepository->create();
        $media->setType($type ?? '');
        $media->setName(u($uploadedFile->getClientOriginalName())->beforeLast('.')->toString());
        $media->setFileType($uploadedFile->getClientOriginalExtension());
        $media->setFileName(u($path)->afterLast('/')->toString());
        $media->setPath($path);

        $this->eventDispatcher->dispatch(new MediaEvent($media), MediaEvents::MEDIA_UPLOAD);
        $this->mediaStorage->write($path, $uploadedFile->getContent());
        $this->mediaRepository->add($media);
        $this->eventDispatcher->dispatch(new MediaEvent($media), MediaEvents::MEDIA_UPLOADED);

        return $media;
    }
}
