<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Extension;

use LAG\AdminBundle\Form\Type\TinyMce\TinyMceType;
use LAG\AdminBundle\Translation\Helper\TranslationHelperInterface;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class TinyMceExtension extends AbstractTypeExtension
{
    private TranslationHelperInterface $translationHelper;
    private RouterInterface $router;
    private Packages $packages;

    public static function getExtendedTypes(): iterable
    {
        return [TinyMceType::class];
    }

    public function __construct(TranslationHelperInterface $translationHelper, RouterInterface $router, Packages $packages)
    {
        $this->translationHelper = $translationHelper;
        $this->router = $router;
        $this->packages = $packages;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->addNormalizer('tinymce_options', function (Options $options, $value) {
                if (!\array_key_exists('toolbar2', $value)) {
                    return $value;
                }
                $value['toolbar2'] .= ' | add_gallery add_image edit_image';
                $value['content_css'][] = $this->packages->getUrl('/bundles/jkmedia/assets/media-editor.css');

                return $value;
            })
            ->addNormalizer('custom_buttons', function (Options $options, $value) {
                $value = \is_array($value) ? $value : [];
                $value['add_gallery'] = [
                    'event' => 'tinymce-add-gallery',
                    'text' => $this
                        ->translationHelper
                        ->transWithPattern('create_gallery', [], null, null, null, 'tinymce'),
                ];
                $value['add_image'] = [
                    'event' => 'tinymce_add_image',
                    'text' => $this
                        ->translationHelper
                        ->transWithPattern('add_image', [], null, null, null, 'tinymce'),
                ];
                $value['edit_image'] = [
                    'event' => 'tinymce_edit_image',
                    'text' => $this
                        ->translationHelper
                        ->transWithPattern('edit_image', [], null, null, null, 'tinymce'),
                ];

                return $value;
            })
        ;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['attr']['data-controller'] .= ' media-tinymce media-gallery-tinymce';
        $view->vars['attr']['data-gallery-url'] = $this->router->generate('media.gallery_modal');
    }
}
