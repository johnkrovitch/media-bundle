<?php

declare(strict_types=1);

namespace JK\MediaBundle\Event;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Contracts\EventDispatcher\Event;

class MediaEvent extends Event
{
    private MediaInterface $media;

    public function __construct(MediaInterface $media)
    {
        $this->media = $media;
    }

    public function getMedia(): MediaInterface
    {
        return $this->media;
    }
}
