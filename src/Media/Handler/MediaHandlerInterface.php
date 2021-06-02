<?php

namespace JK\MediaBundle\Media\Handler;

use JK\MediaBundle\Entity\MediaInterface;

interface MediaHandlerInterface
{
    public function supports(array $data = []): bool;

    public function handle(array $data = []): MediaInterface;
}
