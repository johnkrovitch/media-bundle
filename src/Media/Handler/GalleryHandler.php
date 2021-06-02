<?php

namespace JK\MediaBundle\Media\Handler;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;

class GalleryHandler implements MediaHandlerInterface, NamedMediaHandlerInterface
{
    private MediaRepositoryInterface $mediaRepository;

    public function __construct(MediaRepositoryInterface $mediaRepository)
    {
        $this->mediaRepository = $mediaRepository;
    }

    public function supports(array $data = []): bool
    {
        return $data['gallery_media_id'] ?? false;
    }

    public function handle(array $data = []): MediaInterface
    {
        return $this->mediaRepository->get($data['gallery_media_id']);
    }

    public function getName(): string
    {
        return 'gallery';
    }

    public function getLabel(): string
    {
        return 'media.media.choose_from_gallery';
    }
}
