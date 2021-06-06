<?php

declare(strict_types=1);

namespace JK\MediaBundle\DataSource;

use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;

class CompositeDataSource implements DataSourceInterface, DataSourceRegistryInterface
{
    /**
     * @var DataSourceInterface[]
     */
    private array $dataSources;

    public function __construct(array $dataSources)
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

    public function getDataSource(string $name): DataSourceInterface
    {
        if (!$this->hasDataSource($name)) {
            throw new MediaException(sprintf('The datasource "%s" does not exists', $name));
        }

        return $this->dataSources[$name];
    }

    public function hasDataSource(string $name): bool
    {
        return \array_key_exists($name, $this->dataSources);
    }

    public function getDataSources(): iterable
    {
        return $this->dataSources;
    }
}
