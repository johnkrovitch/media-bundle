<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Validation\Constraints\SelectConstraint;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SelectType extends AbstractType
{
    public function getBlockPrefix(): string
    {
        return 'jk_media_';
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('selectType', ChoiceType::class, [
                'row_attr' => [
                    'data-controller' => 'media-select',
                ],
                'choices' => [
                    'jk_media.datasource.computer' => MediaInterface::DATASOURCE_COMPUTER,
                    'jk_media.datasource.gallery' => MediaInterface::DATASOURCE_GALLERY,
                ],
                'choice_attr' => function ($choice, $key, $value) {
                    return [
                        'class' => 'form-check-input',
                        'data-action' => 'media-select#showDataSource',
                        'data-target' => 'media-datasource-'.$value,
                    ];
                },
                'expanded' => true,
                'label' => 'jk_media.media.datasource',
                'help' => 'jk_media.media.datasource_help',
            ])
            ->add('upload', FileType::class, [
                'label' => false,
                'required' => false,
                'row_attr' => [
                    'class' => 'hide',
                ],
            ])
            ->add('gallery', GalleryType::class, [
                'row_attr' => [
                    'class' => 'hide',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('constraints', [new SelectConstraint()])
            ->setDefault('label', false)

            ->define('media_type')
            ->allowedTypes('string', 'null')
        ;
    }
}
