<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Handler;

use Doctrine\Common\Collections\Collection;
use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface SelectFormHandlerInterface
{
    /**
     * @return Collection|MediaInterface[]
     */
    public function handle(string $selectType, ?string $mediaType, ?UploadedFile $file, array $gallery = []): Collection;
}
