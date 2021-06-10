<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Path;

interface PathResolverInterface
{
    /**
     * Return the path configured for the given media type. If none is provided, return the upload directory root.
     */
    public function resolve(string $originalFileName, ?string $type): string;
}
