<?php

declare(strict_types=1);

namespace JK\MediaBundle\DataSource\Context;

class FormContext implements DataSourceContext
{
    private string $name;
    private array $data;

    public function __construct(string $name, array $formData = [])
    {
        $this->name = $name;
        $this->data = $formData;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getData(string $name)
    {
        return $this->data[$name];
    }

    public function hasData(string $name): bool
    {
        return \array_key_exists($name, $this->data);
    }
}
