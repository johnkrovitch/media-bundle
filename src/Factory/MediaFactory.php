<?php

namespace JK\MediaBundle\Factory;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\File;

/** @deprecated  */
class MediaFactory implements MediaFactoryInterface
{
    public function create(File $file, string $type): MediaInterface
    {
        $media = new Media();
        $media->setName($file->getFilename());
        $media->setFileName($file->getFilename());
        $media->setSize($file->getSize());
        $media->setType($type);

        return $media;
    }
}
