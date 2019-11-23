<?php

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;

class TinyMceImageInsertType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('uploadType', ChoiceType::class, [
                'choices' => MediaType::getUploadChoices(),
                'expanded' => true,
                'attr' => [
                    'class' => 'media-choice',
                ],
            ])
            ->add('upload', JQueryUploadType::class, [
                'attr' => [
                    'class' => MediaType::UPLOAD_FROM_COMPUTER,
                ],
                'label' => false,
                'end_point' => 'article_content',
                'required' => false,
                'media_target' => 'modal-media-hidden-target',
            ])
            ->add('gallery', HiddenType::class, [
                'attr' => [
                    'class' => 'gallery-hidden-input',
                ],
            ])
        ;
    }
}
