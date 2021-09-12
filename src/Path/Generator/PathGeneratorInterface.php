<?php

declare(strict_types=1);

namespace JK\MediaBundle\Path\Generator;

interface PathGeneratorInterface
{
    /**
     * Generate a relative path for the given filename. If a media type is provided, the media directory mapping will be
     * used. If the media type is not known an exception will be thrown. If the filename does not contain an extension,
     * an exception will also be thrown.
     */
    public function generatePath(string $originalFileName, string $mediaType = null): string;
}
