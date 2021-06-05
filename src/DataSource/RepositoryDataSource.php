<?php

namespace JK\MediaBundle\DataSource;

use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Repository\MediaRepositoryInterface;

class RepositoryDataSource implements DataSourceInterface
{
    private MediaRepositoryInterface $mediaRepository;

    public function __construct(MediaRepositoryInterface $mediaRepository)
    {
        $this->mediaRepository = $mediaRepository;
    }

    public function supports(DataSourceContext $context): bool
    {
        return $context->getName() === MediaInterface::DATASOURCE_GALLERY;
    }

    public function get(DataSourceContext $context): MediaInterface
    {
        if (!$context->hasValue('media_id')) {
            throw new MediaException('The parameter "%s" is missing from the media context');
        }

        return $this->mediaRepository->get($context->getValue('media_id'));
    }

    public function getCollection(DataSourceContext $context): array
    {
        if (!$context->hasValue('media_ids')) {
            throw new MediaException('The parameter "%s" is missing from the media context');
        }

        return $this->mediaRepository->findBy([
            'id' => $context->getValue('media_ids'),
        ]);
    }
}
