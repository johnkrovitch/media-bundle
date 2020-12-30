<?php

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GalleryType extends AbstractType
{
    public function getParent(): string
    {
        return HiddenType::class;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'gallery-input',
                    'data-select' => 'gallery',
                ],
                'container_attr' => [],
                'multiple' => false,
            ])
            ->setAllowedTypes('multiple', 'boolean')
        ;
    }
    
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['container_attr'] = $options['container_attr'];
    }
}
