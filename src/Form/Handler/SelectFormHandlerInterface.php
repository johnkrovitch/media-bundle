<?php

namespace JK\MediaBundle\Form\Handler;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface SelectFormHandlerInterface
{
    public function handle(string $selectType, ?string $mediaType, ?UploadedFile $file, array $gallery = []): MediaInterface;
}
