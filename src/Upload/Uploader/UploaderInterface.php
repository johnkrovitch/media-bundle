<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Uploader;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface UploaderInterface
{
    /**
     * Upload a file and update the media data according to the uploaded file.
     */
    public function upload(UploadedFile $uploadedFile, MediaInterface $media): void;
}
