<?php

namespace JK\MediaBundle\Upload\Uploader;

use Symfony\Component\HttpFoundation\File\UploadedFile;

interface UploaderInterface
{
    public function upload(UploadedFile $uploadedFile, string $type): void;
}
