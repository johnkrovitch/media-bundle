<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GalleryType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    '',
                    'class' => 'media-gallery-input',
                ],
                'multiple' => false,
            ])
            ->setAllowedTypes('multiple', 'boolean')
        ;
    }

    public function getParent(): string
    {
        return HiddenType::class;
    }
}
