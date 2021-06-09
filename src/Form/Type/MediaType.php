<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\Media;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class MediaType extends AbstractType
{
    const UPLOAD_FROM_COMPUTER = 'upload_from_computer';
    const CHOOSE_FROM_COLLECTION = 'choose_from_collection';

    private RouterInterface $router;

    public static function getUploadChoices(): array
    {
        return [
            'cms.media.upload_from_computer' => MediaType::UPLOAD_FROM_COMPUTER,
            'cms.media.choose_from_collection' => MediaType::CHOOSE_FROM_COLLECTION,
        ];
    }

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id', HiddenType::class, [
                'attr' => [
                    'class' => 'media-identifier',
                ],
                'required' => false,
            ])
            ->add('file', FileType::class, [
                'attr' => [
                    'class' => 'media-file-upload',
                ],
                'label' => false,
                'mapped' => false,
                'required' => false,
            ])
            ->add('url', UrlType::class, [
                'mapped' => false,
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'media-embed-form cms-media-form',
                ],
                'row_attr' => [
                    'data-controller' => 'media-form',
                    'data-target' => '.media-identifier',
                    'data-url' => $this->router->generate('media.upload_ajax'),
                ],
                'by_reference' => true,
                'data_class' => Media::class,
                'label' => 'media.form.label',
                'help' => 'media.form.help',
                'upload_type' => null,
            ])
            ->addNormalizer('row_attr', function (Options $options, $value) {
                $value['data-upload-type'] = $options->offsetGet('upload_type');

                return $value;
            })
        ;
    }
}
