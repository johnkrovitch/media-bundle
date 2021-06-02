<?php

namespace JK\MediaBundle\Media\Handler;

interface NamedMediaHandlerInterface
{
    public function getName(): string;

    public function getLabel(): string;
}
