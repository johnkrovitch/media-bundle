<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Form\Transformer\MediaTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MediaType extends AbstractType
{
    public function __construct(private MediaTransformer $transformer)
    {
    }

    public function getBlockPrefix(): string
    {
        return 'jk_media';
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('identifier', HiddenType::class, [
                'attr' => [
                    'class' => 'media-identifier',
                ],
                'required' => false,
            ])
            ->addModelTransformer($this->transformer)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'media-embed-form cms-media-form',
                ],
                'by_reference' => true,
                'data_class' => Media::class,
                'label' => false,
                'help' => 'jk_media.form.help',
                'help_attr' => ['class' => 'form-text'],
                'upload_type' => null,
            ])
        ;
    }
}
