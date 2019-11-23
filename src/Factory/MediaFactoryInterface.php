<?php

namespace JK\MediaBundle\Factory;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\File;

interface MediaFactoryInterface
{
    public function create(File $file, string $type): MediaInterface;
}
