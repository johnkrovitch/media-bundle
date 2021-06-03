<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Upload\Handler\CompositeHandler;
use JK\MediaBundle\Upload\Handler\MediaHandlerInterface;
use JK\MediaBundle\Validation\Constraints\UploadTypeConstraint;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UploadType extends AbstractType
{
    private CompositeHandler $mediaHandler;

    public function __construct(CompositeHandler $mediaHandler)
    {
        $this->mediaHandler = $mediaHandler;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('upload_type', ChoiceType::class, [
                'attr' => [
                    'class' => 'media-upload-type',
                ],
                'choices' => $this->buildChoices(),
                'choice_attr' =>  function($choice, $key, $value) {
                    return [
                        'class' => 'form-check-input',
                    ];
                },
                'expanded' => true,
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
            ->define('constraints')
            ->default(new UploadTypeConstraint())

            ->define('label')
            ->default(false)

            ->define('media_type')
            ->allowedTypes('string', 'null')
        ;
    }

    private function buildChoices(): array
    {
        $choices = [];

        foreach ($this->mediaHandler->getHandlers() as $handler) {
            $choices[$handler->getName()] = $handler->getLabel();
        }

        return $choices;
    }
}
