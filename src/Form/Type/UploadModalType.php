<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Validation\Constraints\UploadTypeConstraint;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UploadModalType extends AbstractType
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
            ->add('upload', FileType::class, [
                'attr' => [
                    'class' => MediaType::UPLOAD_FROM_COMPUTER,
                ],
                'label' => false,
                'required' => false,
            ])
            ->add('gallery', HiddenType::class, [
                'attr' => [
                    'class' => 'media-gallery-input',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'constraints' => [
                    new UploadTypeConstraint(),
                ],
                'label' => false,
            ])
        ;
    }
}
