<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\DataSource\DataSourceInterface;
use JK\MediaBundle\DataSource\DataSourceRegistryInterface;
use JK\MediaBundle\Upload\Handler\CompositeHandler;
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

        foreach ($this->dataSources->getDataSources() as $name => $dataSource) {
            $choices[$name] = 'jk_media.datasource.'.$name;
        }

        return $choices;
    }
}
