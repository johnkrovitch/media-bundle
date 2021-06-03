<?php

namespace JK\MediaBundle\Upload\Handler;

interface NamedMediaHandlerInterface
{
    public function getName(): string;

    public function getLabel(): string;
}
