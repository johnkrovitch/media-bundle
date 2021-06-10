<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Transformer;

use JK\MediaBundle\Form\Type\MediaModalType;
use JK\MediaBundle\Form\Type\TinyMceImageEditType;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

// TODO remove ?
class ArrayToImageTransformer implements DataTransformerInterface
{
    protected $excludedAttributes = [];

    public function transform($data)
    {
        if (!\is_array($data)) {
            throw new TransformationFailedException('Data should an array');
        }
        $excludedAttributes = [
            'class',
            'data-mce-src',
            'data-mce-selected',
        ];
        $defaultAttributes = [
            'height' => 150,
            'width' => 150,
        ];

        if (!\array_key_exists('height', $data) || !\array_key_exists('width', $data)) {
            $webDirectory = __DIR__.'/../../../../../web';
            $webDirectory = realpath($webDirectory);

            $position = strpos($data['src'], 'cache/resolve/raw/');
            $delta = \strlen('cache/resolve/raw/');

            if (false === $position) {
                $position = strpos($data['src'], 'cache/raw/');
                $delta = \strlen('cache/raw/');
            }
            $relativePathPosition = $position + $delta;
            $relativePath = substr($data['src'], $relativePathPosition);

            $localPath = $webDirectory.'/'.$relativePath;

            if (file_exists($localPath)) {
                $imageSize = getimagesize($localPath);
                $data['width'] = $imageSize[0];
                $data['height'] = $imageSize[1];
            }
        }

        if (\array_key_exists('class', $data)) {
            if ('pull-'.MediaModalType::ALIGNMENT_FIT_TO_WIDTH === $data['class']) {
                $data['alignment'] = MediaModalType::ALIGNMENT_FIT_TO_WIDTH;
            } elseif ('pull-'.MediaModalType::ALIGNMENT_LEFT === $data['class']) {
                $data['alignment'] = MediaModalType::ALIGNMENT_LEFT;
            } elseif ('pull-'.MediaModalType::ALIGNMENT_RIGHT === $data['class']) {
                $data['alignment'] = MediaModalType::ALIGNMENT_RIGHT;
            } elseif ('pull-'.MediaModalType::ALIGNMENT_CENTER === $data['class']) {
                $data['alignment'] = MediaModalType::ALIGNMENT_CENTER;
            } elseif ('pull-'.MediaModalType::ALIGNMENT_CENTER === $data['class']) {
                $data['alignment'] = MediaModalType::ALIGNMENT_NONE;
            }
        }

        if (!\array_key_exists('alignment', $data)) {
            $data['alignment'] = TinyMceImageEditType::ALIGNMENT_NONE;
        }

        foreach ($data as $name => $value) {
            if (\in_array(strtolower($name), $excludedAttributes)) {
                unset($data[$name]);
            }
        }
        $attributes = array_merge($defaultAttributes, $data);

        return $attributes;
    }

    public function reverseTransform($data)
    {
        if (!\is_array($data)) {
            throw new TransformationFailedException('Data should an array');
        }
        unset($data['fit_to_width']);

        $data['style'] = '';

        if (\array_key_exists('alignment', $data)) {
            $data['class'] = 'pull-'.$data['alignment'];

            unset($data['alignment']);
        }
        $content = '<img';

        foreach ($data as $attribute => $value) {
            $content .= ' '.$attribute.'="'.$value.'"';
        }
        $content .= ' />';

        return $content;
    }
}
