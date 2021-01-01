<?php

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class DropzoneType extends AbstractType
{
    private RouterInterface $router;
    
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }
    
    public function getParent(): string
    {
        return FileType::class;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setNormalizer('row_attr', function (Options $options, $value) {
                if (empty($value['data-controller'])) {
                    $value['data-controller'] = 'media-dropzone';
                }
    
                if (empty($value['id'])) {
                    $value['id'] = uniqid('media-dropzone-');
                }
    
                if (empty($value['data-url'])) {
                    $value['data-url'] = $this->router->generate('jk_media.media.upload');
                }
    
                return $value;
            })
        ;
    }
}
