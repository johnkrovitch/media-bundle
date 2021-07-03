<?php

declare(strict_types=1);

namespace JK\MediaBundle\Assets\Path;

use JK\MediaBundle\Entity\MediaInterface;

interface PublicPathResolverInterface
{
    /**
     * Return the path to the media file according to its type.
     */
    public function resolve(MediaInterface $media): string;
}
