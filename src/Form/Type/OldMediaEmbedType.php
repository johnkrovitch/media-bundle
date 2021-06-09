<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Validation\Constraints\UploadTypeConstraint;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/** @deprecated  */
class OldMediaEmbedType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('media', HiddenType::class, [
                'attr' => [
                    'class' => 'cms-media-id-container',
                ],
            ])
            ->add('uploadType', ChoiceType::class, [
                'choices' => MediaType::getUploadChoices(),
                'expanded' => true,
                'attr' => [
                    'class' => 'cms-media-choice',
                ],
            ])
            ->add('upload', FileType::class, [
                'attr' => [
                    'class' => MediaType::UPLOAD_FROM_COMPUTER,
                ],
                'label' => false,
                'help' => 'media.form.upload_help',
                'required' => false,
            ])
            ->add('gallery', GalleryType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'media-embed-form',
                ],
                'constraints' => [
                    new UploadTypeConstraint(),
                ],
                'label' => false,
            ])
        ;
    }
}
