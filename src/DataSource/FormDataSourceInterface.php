<?php

declare(strict_types=1);

namespace JK\MediaBundle\DataSource;

interface FormDataSourceInterface extends DataSourceInterface
{
    public function getFormType(): string;
}
