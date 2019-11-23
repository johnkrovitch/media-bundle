<?php

namespace JK\MediaBundle\Repository;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Exception;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class MediaRepository extends ServiceEntityRepository
{
    public function __construct(Registry $registry)
    {
        parent::__construct($registry, Media::class);
    }

    /**
     * Return a new instance of the configured Media class.
     *
     * @return MediaInterface
     *
     * @throws Exception
     */
    public function create()
    {
        $className = $this->getClassName();

        $media = new $className();

        if (!$media instanceof MediaInterface) {
            throw new Exception('Media class '.$className.' should extends '.MediaInterface::class);
        }

        return $media;
    }

    public function findAll()
    {
        return $this
            ->findBy([], [
                'updatedAt' => 'DESC',
            ])
        ;
    }

    public function findPagination($page = 1, $maxPerPage = 9)
    {
        $queryBuilder = $this
            ->createQueryBuilder('media')
            ->addOrderBy('media.updatedAt', 'DESC')
        ;

        $adapter = new DoctrineORMAdapter($queryBuilder->getQuery(), false);
        $pager = new Pagerfanta($adapter);
        $pager->setMaxPerPage($maxPerPage);
        $pager->setCurrentPage($page);

        return $pager;
    }

    public function save(MediaInterface $media): void
    {
        $this->_em->persist($media);
        $this->_em->flush();
    }
}
