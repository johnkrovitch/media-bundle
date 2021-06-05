<?php

namespace JK\MediaBundle\DataSource;

interface DataSourceRegistryInterface
{
    public function getDataSource(string $name): DataSourceInterface;

    public function hasDataSource(string $name): bool;

    public function getDataSources(): iterable;
}
