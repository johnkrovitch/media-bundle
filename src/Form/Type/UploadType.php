<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UploadType extends AbstractType
{
    public function getParent(): string
    {
        return FileType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'jk_media_upload';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'form-control',
                ],
                'label' => 'jk_media.datasource.computer',
                'help' => 'jk_media.datasource.computer_help',
                'required' => false,
            ])
        ;
    }
}
