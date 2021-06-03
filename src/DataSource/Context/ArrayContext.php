<?php

namespace JK\MediaBundle\DataSource\Context;

class ArrayContext implements DataSourceContext
{
    private string $name;
    private array $values;

    public function __construct(string $name, array $values = [])
    {
        $this->name = $name;
        $this->values = $values;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getValue(string $name)
    {
        return $this->values[$name];
    }

    public function hasValue(string $name): bool
    {
        return array_key_exists($name, $this->values);
    }
}
