<?php

namespace JK\MediaBundle\Upload\Path;

interface PathResolverInterface
{
    /**
     * Return the path configured for the given media type. If none is provided, return the upload directory root.
     */
    public function resolve(?string $type): string;
}
