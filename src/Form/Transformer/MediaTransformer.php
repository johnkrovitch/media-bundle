<?php

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Assets\Helper\AssetsHelper;
use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepository;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class MediaTransformer implements DataTransformerInterface
{
    private MediaRepository $repository;
    private AssetsHelper $helper;
    
    public function __construct(MediaRepository $repository, AssetsHelper $helper)
    {
        $this->repository = $repository;
        $this->helper = $helper;
    }

    public function transform($value): array
    {
        if ($value === null) {
            return ['id' => null];
        }

        if (!$value instanceof MediaInterface) {
            throw new UnexpectedTypeException($value, MediaInterface::class);
        }

        return [
            'id' => $value->getId(),
            'path' => $this->helper->getMediaPath($value),
        ];
    }

    public function reverseTransform($value)
    {
        if (!is_array($value) || !key_exists('id', $value)) {
            return $value;
        }
        $media = null;
    
        if ($value['id'] !== null) {
            $media = $this->repository->find($value['id']);
        }
    
        if ($media === null) {
            $media = new Media();
        }
        
        return $media;
    }
}
