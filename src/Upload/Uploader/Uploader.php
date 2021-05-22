<?php

namespace JK\MediaBundle\Upload\Uploader;

use Exception;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Event\MediaEvents;
use JK\MediaBundle\Event\MediaEvent;
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
//        FilesystemOperator $mediaStorage,
        MediaRepositoryInterface $mediaRepository,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->pathResolver = $pathResolver;
//        $this->mediaStorage = $mediaStorage;
        $this->mediaRepository = $mediaRepository;
        $this->eventDispatcher = $eventDispatcher;
    }

    public function upload(UploadedFile $uploadedFile, ?string $type): MediaInterface
    {
        // Get the upload directory according to the media type
        $uploadDirectory = $this->pathResolver->resolve($type);
        $fileName = u($uploadedFile->getClientOriginalName())->snake()->toString();

        $path = u($uploadDirectory)
            ->ensureEnd('/')
            ->append($fileName)
            ->append('_', uniqid(), '.', $uploadedFile->getClientOriginalExtension())
            ->toString()
        ;
        $media = $this->mediaRepository->create();
        $media->setType($type ?? '');
        $media->setName($fileName);
        $media->setFileType($uploadedFile->getClientOriginalExtension());
        $media->setFileName($fileName);
        $media->setPath($path);

        $this->eventDispatcher->dispatch(new MediaEvent($path, $media), MediaEvents::MEDIA_UPLOAD);
        $this->mediaStorage->write($path, $uploadedFile->getContent());
        $this->mediaRepository->add($media);
        $this->eventDispatcher->dispatch(new MediaEvent($path, $media), MediaEvents::MEDIA_UPLOADED);

        return $media;
    }
}
