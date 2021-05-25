<?php

declare(strict_types=1);

namespace JK\MediaBundle\Factory;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\File;

/** @deprecated  */
interface MediaFactoryInterface
{
    /**
     * Create a new Media with the given file.
     */
    public function create(File $file, string $type): MediaInterface;
}
