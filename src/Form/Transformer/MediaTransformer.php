<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

/** @deprecated  */
class MediaTransformer implements MediaTransformerInterface
{
    private MediaRepositoryInterface $repository;

    public function __construct(MediaRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function transform(?MediaInterface $value): MediaInterface
    {
        if (null === $value) {
            return new Media();
        }

        if (!$value instanceof MediaInterface) {
            throw new UnexpectedTypeException($value, MediaInterface::class);
        }

        return $value;
    }

    public function reverseTransform(?MediaInterface $value): ?MediaInterface
    {
        if ($value instanceof MediaInterface) {
            if (!$value->getId()) {
                return null;
            }
            $this->repository->clear();
            $refreshedValue = $this->repository->find($value->getId());

            if (null === $refreshedValue) {
                throw new TransformationFailedException('Unable to find an article with id "'.$value->getId().'"');
            }
            $value = $refreshedValue;
        }

        return $value;
    }
}
