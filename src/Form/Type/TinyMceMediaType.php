<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Form\Transformer\MediaTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class TinyMceMediaType extends AbstractType
{
    /**
     * @var MediaTransformer
     */
    private $mediaTransformer;

    /**
     * @var RouterInterface
     */
    private $router;

    public function __construct(MediaTransformer $mediaTransformer, RouterInterface $router)
    {
        $this->mediaTransformer = $mediaTransformer;
        $this->router = $router;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id', HiddenType::class)
            ->add('file', FileType::class, [
                'attr' => [
                    'class' => 'fileupload-input',
                    'data-upload-url' => $this->router->generate('media.upload_ajax'),
                ],
                'label' => false,
            ])
            ->add('choice', ChoiceType::class, [
                'choices' => [
                    'cms.media.upload_from_computer',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'label' => 'cms.article.thumbnail',
                'help' => 'cms.article.thumbnail_help',
            ])
        ;
    }
}
