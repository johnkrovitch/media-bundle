<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Entity\MediaInterface;

interface MediaTransformerInterface
{
    public function transform(?MediaInterface $value): MediaInterface;

    public function reverseTransform(?MediaInterface $value): ?MediaInterface;
}
