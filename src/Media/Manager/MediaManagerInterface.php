<?php

namespace JK\MediaBundle\Media\Manager;

use JK\MediaBundle\Media\Data\MediaPersisterInterface;

interface MediaManagerInterface
{
    public function upload(array $context = []): array;
}
