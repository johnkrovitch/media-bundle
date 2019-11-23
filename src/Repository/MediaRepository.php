<?php

namespace JK\MediaBundle\Repository;

use Doctrine\Common\Collections\Collection;
use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use Exception;
use JK\Repository\AbstractRepository;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class MediaRepository extends AbstractRepository
{
    public function getEntityClass(): string
    {
        return Media::class;
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

    public function findAll(): Collection
    {
        return parent::findBy([], [
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
}
