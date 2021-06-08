<?php

namespace JK\MediaBundle\Form\Handler;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class SelectFormHandler implements SelectFormHandlerInterface
{
    public function handle(string $selectType, ?string $mediaType, ?UploadedFile $file, array $gallery = []): MediaInterface
    {
        // TODO: Implement handle() method.
    }
}
