<?php

declare(strict_types=1);

namespace JK\MediaBundle\Upload\Handler;

use JK\MediaBundle\Entity\MediaInterface;

/** @deprecated  */
interface MediaHandlerInterface
{
    public function supports(array $data = []): bool;

    public function handle(array $data = []): MediaInterface;
}
