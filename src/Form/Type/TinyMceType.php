<?php

namespace JK\MediaBundle\Form\Type;

use Exception;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TinyMceType extends AbstractType
{
    const ALLOWED_PLUGINS = [
        'advlist',
        'anchor',
        'autolink',
        'charmap',
        'code',
        'colorpicker',
        'emoticons',
        'fullscreen',
        'directionality',
        'hr',
        'image',
        'insertdatetime',
        'imagetools',
        'media',
        'nonbreaking',
        'link',
        'lists',
        'pagebreak',
        'print',
        'paste',
        'preview',
        'save',
        'searchreplace',
        'table',
        'textpattern',
        'template',
        'textcolor',
        'wordcount',
        'visualblocks',
        'visualchars',
    ];

    /**
     * @return string
     */
    public function getParent()
    {
        return TextareaType::class;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'tinymce' => [],
            ])
            ->setAllowedTypes('tinymce', 'array')
            ->setNormalizer('tinymce', function (Options $options, $value) {
                $resolver = new OptionsResolver();
                $resolver
                    ->setDefaults([
                        'branding' => false,
                        'language' => 'fr_FR',
                        'selector' => '#'.uniqid('tinymce-'),
                        'toolbar1' => 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter '
                            .'alignright alignjustify | bullist numlist outdent indent | link image toolbar2: print preview '
                            .'media | forecolor backcolor emoticons code | add_gallery add_image edit_image',
                        'image_advtab' => true,
                        'relative_urls' => false,
                        'convert_urls' => false,
                        'theme' => 'modern',
                        'skin' => 'lightgray',
                        'imagetools_toolbar' => 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                        'body_class' => 'mceForceColors container',
                        'browser_spellcheck' => true,
                        'plugins' => self::ALLOWED_PLUGINS,
                        'height' => 400,
                    ])
                    ->setNormalizer('plugins', function (Options $options, $value) {
                        foreach ($value as $plugin) {
                            if (!in_array($plugin, self::ALLOWED_PLUGINS)) {
                                throw new Exception('Invalid tinymce plugins '.$plugin);
                            }
                        }

                        return $value;
                    })
                    ->setAllowedTypes('plugins', 'array')
                    ->setAllowedTypes('branding', 'boolean')
                    ->setAllowedTypes('selector', 'string')
                    ->setAllowedTypes('theme', 'string')
                    ->setAllowedTypes('skin', 'string')
                    ->setAllowedTypes('toolbar1', 'string')
                    ->setAllowedTypes('image_advtab', 'boolean')
                    ->setAllowedTypes('convert_urls', 'boolean')
                    ->setAllowedTypes('imagetools_toolbar', 'string')
                    ->setAllowedTypes('content_css', 'string')
                    ->setAllowedTypes('body_class', 'string')
                    ->setAllowedTypes('browser_spellcheck', 'boolean')
                ;

                return $resolver->resolve($value);
            })
        ;
    }
}
