<?php

declare(strict_types=1);

namespace JK\MediaBundle\Path\Generator;

use JK\MediaBundle\Exception\MediaException;
use function Symfony\Component\String\u;
use Symfony\Component\Uid\Uuid;

class PathGenerator implements PathGeneratorInterface
{
    public function __construct(private array $mapping = [])
    {
    }

    public function generatePath(string $originalFileName, string $mediaType = null): string
    {
        // Media without extension are not allowed in the media library
        if (!u($originalFileName)->containsAny('.')) {
            throw new MediaException(sprintf('Unable to find the extension in the original file name "%s"', $originalFileName));
        }
        $fileName = (string) Uuid::v4();
        $directoryName = u(Uuid::v4()->toRfc4122())->slice(0, 2)->toString();
        $extension = u($originalFileName)->afterLast('.')->toString();
        $uploadDirectory = u('/');

        if ($mediaType !== null && $mediaType !== 'default') {
            if (!\array_key_exists($mediaType, $this->mapping)) {
                throw new MediaException(sprintf('Unable to find a directory mapping for media type "%s"', $mediaType));
            }
            $uploadDirectory = $uploadDirectory
                ->append($this->mapping[$mediaType])
                ->ensureEnd('/')
            ;
        }

        return $uploadDirectory
            ->ensureEnd('/')
            ->append($directoryName)
            ->append('/')
            ->append($fileName)
            ->append('.')
            ->append($extension)
            ->toString()
        ;
    }
}
