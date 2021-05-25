<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Uploader;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface UploaderInterface
{
    public function upload(UploadedFile $uploadedFile, ?string $type): MediaInterface;
}
