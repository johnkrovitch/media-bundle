<?php

declare(strict_types=1);

namespace JK\MediaBundle\DataSource\Context;

interface DataSourceContext
{
    /**
     * Return the datasource name.
     */
    public function getName(): string;

    /**
     * Return the value associated to the given name. An exception is thrown if the name does not exists.
     */
    public function getData(string $name);

    /**
     * Return true if the given name is associated to a value.
     */
    public function hasData(string $name): bool;
}
