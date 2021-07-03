<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class UploadType extends AbstractType
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

    public function getBlockPrefix(): string
    {
        return 'jk_media_upload';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'form-control',
                ],
                'label' => 'jk_media.datasource.computer',
                'help' => 'jk_media.datasource.computer_help',
                'required' => false,
            ])
        ;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['attr']['data-action'] = 'media-upload#upload';
        $view->vars['row_attr']['data-controller'] = 'media-upload';
        $view->vars['row_attr']['data-target'] = $this->router->generate('jk_media.media.upload');
    }
}
