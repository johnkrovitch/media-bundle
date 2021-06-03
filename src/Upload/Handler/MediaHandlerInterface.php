<?php

namespace JK\MediaBundle\Upload\Handler;

use JK\MediaBundle\Entity\MediaInterface;

interface MediaHandlerInterface
{
    public function supports(array $data = []): bool;

    public function handle(array $data = []): MediaInterface;
}
