<?php

declare(strict_types=1);

namespace JK\MediaBundle\Assets\Path;

use JK\MediaBundle\Entity\MediaInterface;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;

class MediaPathResolver implements MediaPathResolverInterface
{
    private CacheManager $cacheManager;

    public function __construct(CacheManager $cacheManager)
    {
        $this->cacheManager = $cacheManager;
    }

    public function resolve(MediaInterface $media): string
    {
        return $this->cacheManager->resolve($media->getPath(), $media->getType());
    }
}
