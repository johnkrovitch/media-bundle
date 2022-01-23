<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Handler;

use Doctrine\Common\Collections\Collection;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface SelectFormHandlerInterface
{
    public function handle(?UploadedFile $file, mixed $mediaCollection): Collection;
}
