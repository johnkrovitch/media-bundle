<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\DataSource\DataSourceRegistryInterface;
use JK\MediaBundle\Validation\Constraints\UploadTypeConstraint;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MediaSelectType extends AbstractType
{
    private DataSourceRegistryInterface $dataSources;

    public function __construct(DataSourceRegistryInterface $dataSources)
    {
        $this->dataSources = $dataSources;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('datasource', ChoiceType::class, [
                'attr' => [
                    'class' => 'media-upload-type',
                ],
                'choices' => $this->buildChoices(),
                'choice_attr' => function ($choice, $key, $value) {
                    return [
                        'class' => 'form-check-input',
                    ];
                },
                'expanded' => true,
                'label' => 'jk_media.media.datasource',
                'help' => 'jk_media.media.datasource_help'
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
            ->setDefault('constraints', [new UploadTypeConstraint()])
            ->setDefault('label', false)

            ->define('media_type')
            ->allowedTypes('string', 'null')
        ;
    }

    private function buildChoices(): array
    {
        $choices = [];

        foreach ($this->dataSources->getDataSources() as $name => $dataSource) {
            $choices['jk_media.datasource.'.$name] = $name;
        }

        return $choices;
    }
}
