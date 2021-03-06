<?php

namespace JK\MediaBundle\Upload\Uploader;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface UploaderInterface
{
    public function upload(UploadedFile $uploadedFile, string $type): MediaInterface;

    public function getAbsoluteUploadDirectory(string $type): string;

    public function getRelativeUploadDirectory(string $type): string;
}
