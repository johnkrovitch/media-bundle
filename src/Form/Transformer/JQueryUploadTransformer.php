<?php

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepository;
use Symfony\Component\Form\DataTransformerInterface;

/**
 * Transform an Media to an array of data and reverse transform this array into a Media using the id.
 */
class JQueryUploadTransformer implements DataTransformerInterface
{
    /**
     * @var MediaRepository
     */
    protected $mediaRepository;

    /**
     * JQueryUploadTransformer constructor.
     */
    public function __construct(MediaRepository $mediaRepository)
    {
        $this->mediaRepository = $mediaRepository;
    }

    /**
     * Return an array containing media data or null.
     *
     * @param MediaInterface $media
     *
     * @return array
     */
    public function transform($media)
    {
        // the media can be null if the column in the linked entity is nullable
        if (null === $media) {
            return [];
        }

        return [
            'id' => $media->getId(),
            'filename' => $media->getFileName(),
            'type' => $media->getType(),
        ];
    }

    /**
     * Return the Media or null if the id is null.
     *
     * @param array $data
     *
     * @return MediaInterface|object|null
     */
    public function reverseTransform($data)
    {
        if (0 === count($data) || !array_key_exists('id', $data) || !$data['id']) {
            return null;
        }

        return $this
            ->mediaRepository
            ->find($data['id']);
    }
}
