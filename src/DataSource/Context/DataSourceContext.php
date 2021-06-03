<?php

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
    public function getValue(string $name);

    /**
     * Return true if the given name is associated to a value.
     */
    public function hasValue(string $name): bool;
}
