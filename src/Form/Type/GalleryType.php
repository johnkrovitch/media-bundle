<?php

namespace JK\MediaBundle\Form\Type;

use Doctrine\ORM\EntityRepository;
use JK\MediaBundle\Entity\Media;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class GalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('media', EntityType::class, [
                'class' => Media::class,
                'choice_label' => 'name',
                'expanded' => true,
                'query_builder' => function (EntityRepository $repository) {
                    return $repository
                        ->createQueryBuilder('media')
                        ->orderBy('media.updatedAt', 'desc')
                    ;
                },
            ])
        ;
    }
}
