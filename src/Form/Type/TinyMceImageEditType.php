<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Form\Transformer\ArrayToImageTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Range;

class TinyMceImageEditType extends AbstractType
{
    const ALIGNMENT_LEFT = 'left';
    const ALIGNMENT_RIGHT = 'right';
    const ALIGNMENT_CENTER = 'center';
    const ALIGNMENT_NONE = 'none';
    const ALIGNMENT_FIT_TO_WIDTH = 'fit_to_width';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('height', IntegerType::class, [
                'attr' => [
                    'class' => 'height-input',
                ],
                'constraints' => [
                    new Range([
                        'min' => 1,
                    ]),
                ],
                'label' => 'cms.media.height',
            ])
            ->add('width', IntegerType::class, [
                'attr' => [
                    'class' => 'width-input',
                ],
                'constraints' => [
                    new Range([
                        'min' => 1,
                        'max' => 2000,
                    ]),
                ],
                'label' => 'cms.media.width',
            ])
            ->add('keep_proportion', CheckboxType::class, [
                'attr' => [
                    'class' => 'keep-proportion-checkbox',
                    'data-target-width' => '.width-input',
                    'data-target-height' => '.height-input',
                ],
                'data' => true,
                'label' => 'cms.media.keep_proportion',
                'required' => false,
            ])
            ->add('alignment', ChoiceType::class, [
                'choices' => [
                    'cms.main.align_left' => self::ALIGNMENT_LEFT,
                    'cms.main.align_right' => self::ALIGNMENT_RIGHT,
                    'cms.main.align_center' => self::ALIGNMENT_CENTER,
                    'cms.main.align_none' => self::ALIGNMENT_NONE,
                    'cms.main.fit_to_width' => self::ALIGNMENT_FIT_TO_WIDTH,
                ],
                'empty_data' => self::ALIGNMENT_NONE,
                'expanded' => true,
                'label' => 'cms.media.alignment',
            ])
            ->addModelTransformer(new ArrayToImageTransformer())
        ;
    }
}
