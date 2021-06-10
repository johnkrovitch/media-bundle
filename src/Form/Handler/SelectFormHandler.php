<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Handler;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
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

    public function handle(string $selectType, ?string $mediaType, ?UploadedFile $file, array $gallery = []): Collection
    {
        if ($selectType === MediaInterface::DATASOURCE_COMPUTER) {
            $media = $this->mediaRepository->create();
            $this->uploader->upload($file, $media);
            $this->mediaRepository->add($media);

            return new ArrayCollection([$media]);
        }

        if ($selectType === MediaInterface::DATASOURCE_GALLERY) {
            $results = $this->mediaRepository->findBy(['id' => $gallery]);

            return new ArrayCollection($results);
        }

        throw new MediaException(sprintf('The select type "%s" is not handled', $mediaType));
    }
}
