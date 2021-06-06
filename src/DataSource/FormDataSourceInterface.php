<?php

namespace JK\MediaBundle\DataSource;

use Symfony\Component\Form\Extension\Core\Type\FormType;

interface FormDataSourceInterface extends DataSourceInterface
{
    public function getFormType(): string;
}
