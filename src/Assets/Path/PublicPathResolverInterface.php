<?php

declare(strict_types=1);

namespace JK\MediaBundle\Assets\Path;

use JK\MediaBundle\Entity\MediaInterface;

interface PublicPathResolverInterface
{
    /**
     * Return the path to the media file according to its type. The path does not take account of LiipImagine filters.
     */
    public function resolveRaw(MediaInterface $media): string;

    /**
     * Resolve a public path for a media using its type as the LiipImagine filter.
     */
    public function resolve(MediaInterface $media, string $filter): string;
}
