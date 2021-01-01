<?php

namespace JK\MediaBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GalleryType extends AbstractType
{
    public function getParent(): string
    {
        return TextType::class;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'attr' => [
                    'class' => 'gallery-input d-none',
                    'data-select' => 'gallery',
                ],
                'container_attr' => [],
                'label' => false,
                'required' => false,
                'multiple' => false,
            ])
            ->setAllowedTypes('multiple', 'boolean')
            ->setAllowedTypes('container_attr', 'array')
        ;
    }
    
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['container_attr'] = $options['container_attr'];
    }
}
