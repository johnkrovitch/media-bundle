<?php

namespace JK\MediaBundle\Media\Handler;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadedFileHandler implements MediaHandlerInterface, NamedMediaHandlerInterface
{
    private UploaderInterface $uploader;
    private MediaRepositoryInterface $mediaRepository;

    public function __construct(UploaderInterface $uploader, MediaRepositoryInterface $mediaRepository)
    {
        $this->uploader = $uploader;
        $this->mediaRepository = $mediaRepository;
    }

    public function supports(array $data = []): bool
    {
        return ($context['upload_type'] ?? null) === MediaInterface::UPLOAD_FROM_COMPUTER
            && ($context['uploaded_file'] ?? null) instanceof UploadedFile
            && ($context['media_type'] ?? false)
        ;
    }

    public function handle(array $data = []): MediaInterface
    {
        if (!$this->supports($data)) {
            throw new MediaException('The media is not supported');
        }
        $media = $this->mediaRepository->create();
        $media->setType($data['media_type']);
        $this->uploader->upload($data['uploaded_file'], $media);

        return $media;
    }

    public function getName(): string
    {
        return 'upload';
    }

    public function getLabel(): string
    {
        return 'media.media.upload_from_computer';
    }
}
