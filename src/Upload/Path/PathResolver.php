<?php

namespace JK\MediaBundle\Upload\Path;

use JK\MediaBundle\Exception\MediaException;
use function Symfony\Component\String\u;

class PathResolver implements PathResolverInterface
{
    private string $directory;
    private array $mapping;

    public function __construct(string $directory, array $mapping = [])
    {
        $this->directory = $directory;
        $this->mapping = $mapping;
    }

    public function resolve(?string $type): string
    {
        if ($type === null) {
            return $this->directory;
        }

        if (!array_key_exists($type, $this->mapping)) {
            throw new MediaException(sprintf('Unable to find a directory mapping for media type "%s"', $type));
        }

        return u($this->directory)
            ->ensureEnd('/')
            ->append($this->mapping[$type])
            ->toString()
        ;
    }
}
