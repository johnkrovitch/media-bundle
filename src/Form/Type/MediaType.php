<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Form\Transformer\MediaTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class MediaType extends AbstractType
{
    const UPLOAD_FROM_URL = 'upload_from_url';
    const UPLOAD_FROM_COMPUTER = 'upload_from_computer';
    const CHOOSE_FROM_COLLECTION = 'choose_from_collection';

    /**
     * @var MediaTransformer
     */
    private $mediaTransformer;

    /**
     * @var RouterInterface
     */
    private $router;

    public static function getUploadChoices(): array
    {
        return [
            'cms.media.upload_from_computer' => MediaType::UPLOAD_FROM_COMPUTER,
            'cms.media.choose_from_collection' => MediaType::CHOOSE_FROM_COLLECTION,
        ];
    }

    public function __construct(MediaTransformer $mediaTransformer, RouterInterface $router)
    {
        $this->mediaTransformer = $mediaTransformer;
        $this->router = $router;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id', HiddenType::class, [
                'attr' => [
                    'class' => 'cms-media-id',
                ],
                'required' => false,
            ])
            ->add('file', FileType::class, [
                'attr' => [
                    'class' => 'fileupload-input',
                    'data-upload-url' => $this->router->generate('media.upload_ajax'),
                ],
                'label' => false,
                'mapped' => false,
                'required' => false,
            ])
            ->add('url', UrlType::class, [
                'mapped' => false,
                'required' => false,
            ])
            ->addModelTransformer($this->mediaTransformer)
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
                'label' => 'media.form.label',
                'help' => 'media.form.help',
            ]);
    }
}
