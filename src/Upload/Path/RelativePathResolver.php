<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Path;

use JK\MediaBundle\Exception\MediaException;
use function Symfony\Component\String\u;

/** @deprecated  */
class RelativePathResolver implements RelativePathResolverInterface
{
    private array $mapping;

    public function __construct(array $mapping = [])
    {
        $this->mapping = $mapping;
    }

    public function resolve(string $originalFileName, ?string $type): string
    {
        $extension = u($originalFileName)->afterLast('.')->toString();
        $fileName = u($originalFileName)->beforeLast('.')->snake()->toString();
        $uploadDirectory = u('/');

        if ($type !== null) {
            if (!\array_key_exists($type, $this->mapping)) {
                throw new MediaException(sprintf('Unable to find a directory mapping for media type "%s"', $type));
            }
            $uploadDirectory = $uploadDirectory->append($this->mapping[$type]);
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
