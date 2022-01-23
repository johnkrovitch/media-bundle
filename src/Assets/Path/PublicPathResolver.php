<?php

declare(strict_types=1);

namespace JK\MediaBundle\Assets\Path;

use JK\MediaBundle\Entity\MediaInterface;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use function Symfony\Component\String\u;

class PublicPathResolver implements PublicPathResolverInterface
{
    public function __construct(private string $publicPath, private CacheManager $cacheManager)
    {
    }

    public function resolveRaw(MediaInterface $media): string
    {
        return u($this->publicPath)
            ->ensureStart('/')
            ->ensureEnd('/')
            ->append($media->getPath())
            ->toString()
        ;
    }

    public function resolve(MediaInterface $media, string $filter): string
    {
        return $this->cacheManager->getBrowserPath($media->getPath(), $filter);
    }
}
