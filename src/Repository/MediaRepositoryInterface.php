<?php

namespace JK\MediaBundle\Repository;

use JK\MediaBundle\Entity\MediaInterface;
use JK\Repository\RepositoryInterface;
use Pagerfanta\Pagerfanta;

interface MediaRepositoryInterface extends RepositoryInterface
{
    public function create(): MediaInterface;

    public function findPagination($page = 1, $maxPerPage = 9): Pagerfanta;
}
