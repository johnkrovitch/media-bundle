<?php

namespace JK\MediaBundle\Repository;

use Doctrine\Persistence\ObjectRepository;
use JK\MediaBundle\Entity\MediaInterface;
use Pagerfanta\Pagerfanta;

interface MediaRepositoryInterface extends ObjectRepository
{
    public function add(MediaInterface $media): void;

    public function create(): MediaInterface;

    public function paginate($page = 1, $maxPerPage = 9): Pagerfanta;
}
