<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Form\Transformer\MediaTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\Routing\RouterInterface;

class MediaUploadType extends AbstractType
{
    private RouterInterface $router;
    private MediaTransformer $transformer;
    
    public function __construct(RouterInterface $router, MediaTransformer $transformer)
    {
        $this->router = $router;
        $this->transformer = $transformer;
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('file', FileType::class, [
                'mapped' => false,
            ])
            ->add('id', HiddenType::class)
            ->addModelTransformer($this->transformer)
        ;
    }
    
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        if (empty($view->vars['attr']['class'])) {
            $view->vars['attr']['class'] = '';
        }
        $view->vars['attr']['class'] .= 'upload-input';
        $view->vars['row_attr']['data-controller'] = 'media-upload';
        $view->vars['row_attr']['data-endpoint'] = $this->router->generate('jk_media.media.upload', [
            'type' => MediaInterface::TYPE_ARTICLE_THUMBNAIL,
        ]);
    }
}
