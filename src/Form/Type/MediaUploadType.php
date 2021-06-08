<?php

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MediaUploadType extends AbstractType
{
    public function getParent(): string
    {
        return FileType::class;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('label', 'jk_media.datasource.computer')
            ->setDefault('required', false)
        ;
    }
}
