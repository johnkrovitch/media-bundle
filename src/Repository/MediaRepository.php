<?php

declare(strict_types=1);

namespace JK\MediaBundle\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Pagerfanta\PagerfantaInterface;

class MediaRepository extends ServiceEntityRepository implements MediaRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Media::class);
    }

    public function add(MediaInterface $media): void
    {
        $this->_em->persist($media);
        $this->_em->flush();
    }

    public function get($identifier): MediaInterface
    {
        $media = $this->findOneBy(['identifier' => $identifier]);

        if (!$media) {
            throw new MediaException(sprintf('The media "%s" does not exists', $identifier));
        }

        return $media;
    }

    public function create(): MediaInterface
    {
        return new Media();
    }

    public function paginate($page = 1, $maxPerPage = 9): PagerfantaInterface
    {
        $queryBuilder = $this
            ->createQueryBuilder('media')
            ->addOrderBy('media.createdAt', 'desc')
        ;
        $adapter = new QueryAdapter($queryBuilder, false);
        $pager = new Pagerfanta($adapter);
        $pager->setMaxPerPage($maxPerPage);
        $pager->setCurrentPage($page);

        return $pager;
    }
}
