<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\DataTransformerInterface;

class MediaTransformer implements DataTransformerInterface
{
    public function __construct(private MediaRepositoryInterface $repository)
    {
    }

    public function transform($value)
    {
        return $value;
    }

    public function reverseTransform($value)
    {
        return $this->repository->get($value->getIdentifier());
    }
}
