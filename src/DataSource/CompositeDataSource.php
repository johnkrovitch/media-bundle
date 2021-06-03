<?php

namespace JK\MediaBundle\DataSource;

use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;

class CompositeDataSource implements DataSourceInterface
{
    /**
     * @var iterable<DataSourceInterface>
     */
    private iterable $dataSources;

    public function __construct(iterable $dataSources)
    {
        $this->dataSources = $dataSources;
    }

    public function supports(DataSourceContext $context): bool
    {
        foreach ($this->dataSources as $dataSource) {
            if ($dataSource->supports($context)) {
                return true;
            }
        }

        return false;
    }

    public function get(DataSourceContext $context): MediaInterface
    {
        foreach ($this->dataSources as $dataSource) {
            if ($dataSource->supports($context)) {
                return $dataSource->get($context);
            }
        }

        throw new MediaException('The media context is not supported by any datasource');
    }

    public function getCollection(DataSourceContext $context): array
    {
        foreach ($this->dataSources as $dataSource) {
            if ($dataSource->supports($context)) {
                return $dataSource->getCollection($context);
            }
        }

        throw new MediaException('The media context is not supported by any datasource');
    }
}
