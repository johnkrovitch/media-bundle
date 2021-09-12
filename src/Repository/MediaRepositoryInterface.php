<?php

declare(strict_types=1);

namespace JK\MediaBundle\Repository;

use Doctrine\Persistence\ObjectRepository;
use JK\MediaBundle\Entity\MediaInterface;
use Pagerfanta\PagerfantaInterface;

interface MediaRepositoryInterface extends ObjectRepository
{
    public function add(MediaInterface $media): void;

    public function get($identifier): MediaInterface;

    public function create(): MediaInterface;

    public function paginate($page = 1, $maxPerPage = 9): PagerfantaInterface;
}
