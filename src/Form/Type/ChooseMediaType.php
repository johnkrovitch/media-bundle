<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Form\Constraint\ChooseMedia;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class ChooseMediaType extends AbstractType
{
    private RouterInterface $router;
    
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }
    
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'data-controller' => 'add-media',
                ],
                'constraints' => [
                    new ChooseMedia(),
                ],
                'label' => false,
            ])
        ;
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('uploadType', ChoiceType::class, [
                'attr' => [
                    'class' => 'media-choice',
                ],
                'choices' => [
                    'jk_media.media.upload_from_computer' => 'upload',
                    'jk_media.media.choose_from_gallery' => 'gallery',
                ],
                'choice_attr' => function ($choiceValue) {
                    $attr = [
                        'data-action' => 'choose-media#display',
                        'data-target-container' => '.media-'.$choiceValue.'-container',
                    ];
    
                    if ($choiceValue === 'gallery') {
                        $attr['data-target-content-container'] = '.media-gallery-content-container';
                        $attr['data-url'] =  $this->router->generate('jk_media.tinymce.gallery', [
                            'target' => '.gallery-input',
                        ]);
                    }
    
                    return $attr;
                },
                'expanded' => true,
                'label' => 'jk_media.media.choose'
            ])
            ->add('upload', FileType::class, [
                'attr' => [
                    'data-select' => 'upload',
                ],
                'label' => 'jk_media.image.upload_from_computer',
                'required' => false,
                'row_attr' => [
                    'class' => 'd-none media-collapse media-upload-container',
                ],
            ])
            ->add('gallery', GalleryType::class, [
                'container_attr' => [
                    'class' => 'media-gallery-content-container',
                ],
                'row_attr' => [
                    'class' => 'd-none media-collapse media-gallery-container',
                ],
            ])
        ;
    }
}
