<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Path;

interface RelativePathResolverInterface
{
    /**
     * Return the path configured for the given media type. If none is provided, return the upload directory root.
     */
    public function resolve(string $originalFileName, ?string $type): string;
}
