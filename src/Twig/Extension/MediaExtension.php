<?php

namespace JK\MediaBundle\Twig\Extension;

use JK\MediaBundle\Assets\Helper\AssetsHelper;
use JK\MediaBundle\Entity\MediaInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class MediaExtension extends AbstractExtension
{
    /**
     * @var AssetsHelper
     */
    private $helper;

    public function getFunctions()
    {
        return [
            new TwigFunction('media_path', [$this, 'getMediaPath']),
            new TwigFunction('media_directory', [$this, 'getMediaDirectory']),
            new TwigFunction('media_size', [$this, 'getMediaSize']),
        ];
    }

//    public function __construct(AssetsHelper $helper)
//    {
//        $this->helper = $helper;
//    }

    /**
     * Return the path to an media according to its type.
     *
     * @param bool        $absolute
     * @param bool        $cache
     * @param string|null $mediaFilter
     *
     * @return string
     */
    public function getMediaPath(MediaInterface $media, $absolute = true, $cache = true, $mediaFilter = null)
    {
        return $this->helper->getMediaPath($media, $absolute, $cache, $mediaFilter);
    }

    /**
     * Return the media web directory according to its type and the mapping.
     *
     * @param string $mappingName
     *
     * @return string
     */
    public function getMediaDirectory($mappingName)
    {
        return $this->helper->getMediaDirectory($mappingName);
    }

    /**
     * Return a string representing the media size in the most readable unit.
     *
     * @return string
     */
    public function getMediaSize(MediaInterface $media)
    {
        $size = $media->getSize();
        // try size in Kio
        $size = round($size / 1024, 2);

        if ($size >= 1000) {
            $size = round($size / 1024, 2);

            return $size.' Mo';
        }

        return $size.' Ko';
    }
}
