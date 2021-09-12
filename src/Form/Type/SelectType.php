<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Validation\Constraints\SelectConstraint;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SelectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('upload', UploadType::class, [
            ])
            ->add('gallery', GalleryType::class, [
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'constraints' => [new SelectConstraint()],
                'label' => false,
            ])
            ->define('media_type')
            ->allowedTypes('string', 'null')
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'jk_media_select';
    }
}
