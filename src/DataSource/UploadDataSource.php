<?php

namespace JK\MediaBundle\DataSource;

use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadDataSource implements DataSourceInterface
{
    private MediaRepositoryInterface $mediaRepository;
    private UploaderInterface $uploader;

    public function __construct(MediaRepositoryInterface $mediaRepository, UploaderInterface $uploader)
    {
        $this->mediaRepository = $mediaRepository;
        $this->uploader = $uploader;
    }

    public function supports(DataSourceContext $context): bool
    {
        return $context->getName() === MediaInterface::DATASOURCE_COMPUTER;
    }

    public function get(DataSourceContext $context): MediaInterface
    {
        if (!$this->supports($context)) {
            throw new MediaException('The context is not supported by the datasource');
        }

        if (!$context->hasValue('uploaded_file') || !$context->getValue('uploaded_file') instanceof UploadedFile) {
            throw new MediaException('The uploaded_file value is not valid');
        }
        $uploadedFile = $context->getValue('uploaded_file');
        $media = $this->mediaRepository->create();

        if ($context->hasValue('media_type')) {
            $media->setType($context->getValue('media_type'));
        }
        $this->uploader->upload($uploadedFile, $media);
        $this->mediaRepository->add($media);

        return $media;
    }

    public function getCollection(DataSourceContext $context): array
    {
        if (!$this->supports($context)) {
            throw new MediaException('The context is not supported by the datasource');
        }

        if (!$context->hasValue('uploaded_files') || !is_array($context->getValue('uploaded_files'))) {
            throw new MediaException('The uploaded_files value is not valid');
        }
        $mediaCollection = [];

        foreach ($context->getValue('uploaded_files') as $uploadedFile) {
            $media = $this->mediaRepository->create();

            if ($context->hasValue('media_type')) {
                $media->setType($context->getValue('media_type'));
            }
            $this->uploader->upload($uploadedFile, $media);
            $this->mediaRepository->add($media);
            $mediaCollection[] = $media;
        }

        return $mediaCollection;
    }
}
