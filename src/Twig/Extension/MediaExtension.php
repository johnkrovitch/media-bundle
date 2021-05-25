<?php

declare(strict_types=1);

namespace JK\MediaBundle\Twig\Extension;

use JK\MediaBundle\Assets\Path\MediaPathResolverInterface;
use JK\MediaBundle\Entity\MediaInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class MediaExtension extends AbstractExtension
{
    private MediaPathResolverInterface $pathResolver;

    public function getFunctions(): array
    {
        return [
            new TwigFunction('media_path', [$this, 'getMediaPath']),
        ];
    }

    public function __construct(MediaPathResolverInterface $pathResolver)
    {
        $this->pathResolver = $pathResolver;
    }

    /**
     * Return the path to an media according to its type.
     */
    public function getMediaPath(MediaInterface $media): string
    {
        return $this->pathResolver->resolve($media);
    }
}
