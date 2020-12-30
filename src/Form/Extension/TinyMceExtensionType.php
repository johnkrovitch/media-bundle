<?php

namespace JK\MediaBundle\Form\Extension;

use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class TinyMceExtensionType extends AbstractTypeExtension
{
    private RouterInterface $router;
    private TranslatorInterface $translator;
    
    public static function getExtendedTypes(): iterable
    {
        return [\LAG\AdminBundle\Form\Type\TinyMce\TinyMceType::class];
    }
    
    public function __construct(RouterInterface $router, TranslatorInterface $translator)
    {
        $this->router = $router;
        $this->translator = $translator;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'add_media_url' => $this->router->generate('jk_media.tinymce.add_media'),
                'add_media_text' => $this->translator->trans('jk_media.media.add'),
                'update_media_url' => $this->router->generate('jk_media.tinymce.update_media'),
                'update_media_text' => $this->translator->trans('jk_media.media.update'),
                'add_media_gallery_url' => $this->router->generate('jk_media.tinymce.gallery'),
                'add_media_gallery_text' => $this->translator->trans('jk_media.gallery.add'),
            ])
            ->setAllowedTypes('add_media_url', 'string')
            ->setAllowedTypes('add_media_text', 'string')
            ->setAllowedTypes('update_media_url', 'string')
            ->setAllowedTypes('add_media_gallery_url', 'string')
            ->setAllowedTypes('add_media_gallery_text', 'string')
        ;
    }
    
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['attr']['data-controller'] = 'media-tinymce '.$view->vars['attr']['data-controller'];
        
        $view->vars['attr']['data-add-media-url'] = $options['add_media_url'];
        $view->vars['attr']['data-add-media-text'] = $options['add_media_text'];
    
        $view->vars['attr']['data-update-media-url'] = $options['update_media_url'];
        $view->vars['attr']['data-update-media-text'] = $options['update_media_text'];
    
        $view->vars['attr']['data-media-gallery-url'] = $options['add_media_gallery_url'];
        $view->vars['attr']['data-add-media-gallery-text'] = $options['add_media_gallery_text'];
    
        $options['tinymce_options']['toolbar1'] .= '| add_media update_media add_media_gallery';
        $view->vars['attr']['data-options'] = json_encode($options['tinymce_options']);
    }
}
