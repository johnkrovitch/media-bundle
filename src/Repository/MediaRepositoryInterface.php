<?php

namespace JK\MediaBundle\Repository;

use Doctrine\Common\Persistence\ObjectRepository;
use JK\MediaBundle\Entity\MediaInterface;
use JK\Repository\RepositoryInterface;
use Pagerfanta\Pagerfanta;

interface MediaRepositoryInterface extends RepositoryInterface, ObjectRepository
{
    public function create(): MediaInterface;

    public function paginate($page = 1, $maxPerPage = 9): Pagerfanta;
}
