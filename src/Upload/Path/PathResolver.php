<?php

declare(strict_types=1);

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

    public function resolve(string $originalFileName, ?string $type): string
    {
        $extension = u($originalFileName)->afterLast('.')->toString();
        $fileName = u($originalFileName)->beforeLast('.')->snake()->toString();
        $uploadDirectory = u($this->directory)->ensureEnd('/');

        if ($type !== null) {
            if (!\array_key_exists($type, $this->mapping)) {
                throw new MediaException(sprintf('Unable to find a directory mapping for media type "%s"', $type));
            }
            $uploadDirectory->append($this->mapping[$type]);
        }

        return $uploadDirectory
            ->ensureEnd('/')
            ->append()
            ->append($fileName, '_', uniqid(), '.', $extension)
            ->trimEnd('.')
            ->toString()
        ;
    }
}
