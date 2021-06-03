<?php

namespace JK\MediaBundle\DataSource;

use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\Entity\MediaInterface;

interface DataSourceInterface
{
    public function supports(DataSourceContext $context): bool;

    public function get(DataSourceContext $context): MediaInterface;

    public function getCollection(DataSourceContext $context): array;
}
