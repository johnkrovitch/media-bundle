<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Handler;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\UploaderInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class SelectFormHandler implements SelectFormHandlerInterface
{
    private UploaderInterface $uploader;
    private MediaRepositoryInterface $mediaRepository;

    public function __construct(UploaderInterface $uploader, MediaRepositoryInterface $mediaRepository)
    {
        $this->uploader = $uploader;
        $this->mediaRepository = $mediaRepository;
    }

    public function handle(?UploadedFile $file, mixed $mediaCollection): Collection
    {
        if ($file) {
            $media = $this->mediaRepository->create();
            $this->uploader->upload($file, $media);
            $this->mediaRepository->add($media);

            return new ArrayCollection([$media]);
        }

        if ($mediaCollection instanceof MediaInterface) {
            $mediaCollection = new ArrayCollection([$mediaCollection]);
        }

        return $mediaCollection;
    }
}
