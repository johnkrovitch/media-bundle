<?php

namespace JK\MediaBundle\Form\Transformer;

use InvalidArgumentException;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepository;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

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
            return null;
        }

        if (!$value instanceof MediaInterface) {
            $type = gettype($value);

            if (is_object($value)) {
                $type = get_class($value);
            }

            throw new InvalidArgumentException('The value should be an instance of '.MediaInterface::class.', given '.$type);
        }

        if (0 === $value->getId()) {
            return null;
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
