<?php

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepository;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class MediaTransformer implements DataTransformerInterface
{
    /**
     * @var MediaRepository
     */
    private $repository;

    public function __construct(MediaRepository $repository)
    {
        $this->repository = $repository;
    }

    public function transform($value)
    {
        if (null === $value) {
            return new Media();
        }

        if (!$value instanceof MediaInterface) {
            throw new UnexpectedTypeException($value, MediaInterface::class);
        }

        return $value;
    }

    public function reverseTransform($value)
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
