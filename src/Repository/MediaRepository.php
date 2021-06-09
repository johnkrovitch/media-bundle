<?php

namespace JK\MediaBundle\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Persistence\ManagerRegistry;
use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;

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

    public function create(): MediaInterface
    {
        return new Media();
    }

    public function findAll(): Collection
    {
        return parent::findBy([], [
                'updatedAt' => 'DESC',
            ])
        ;
    }

    public function paginate($page = 1, $maxPerPage = 9): Pagerfanta
    {
        $queryBuilder = $this
            ->createQueryBuilder('media')
            ->addOrderBy('media.updatedAt', 'DESC')
        ;

        $adapter = new QueryAdapter($queryBuilder->getQuery(), false);
        $pager = new Pagerfanta($adapter);
        $pager->setMaxPerPage($maxPerPage);
        $pager->setCurrentPage($page);

        return $pager;
    }
}
