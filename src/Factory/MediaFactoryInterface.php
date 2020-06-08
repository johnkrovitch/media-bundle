<?php

namespace JK\MediaBundle\Factory;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\File;

interface MediaFactoryInterface
{
    /**
     * Create a new Media with the given file.
     */
    public function create(File $file, string $type): MediaInterface;
}
