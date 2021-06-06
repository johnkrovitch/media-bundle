<?php

declare(strict_types=1);

namespace JK\MediaBundle\DataSource;

interface DataSourceRegistryInterface
{
    public function getDataSource(string $name): DataSourceInterface;

    public function hasDataSource(string $name): bool;

    public function getDataSources(): iterable;
}
