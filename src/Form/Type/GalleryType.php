<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GalleryType extends AbstractType
{
    private MediaRepositoryInterface $mediaRepository;
    private RequestStack $requestStack;

    public function __construct(MediaRepositoryInterface $mediaRepository, RequestStack $requestStack)
    {
        $this->mediaRepository = $mediaRepository;
        $this->requestStack = $requestStack;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'choices' => $this->buildChoices(),
                'choice_label' => 'name',
                'choice_value' => 'id',
                'data_class' => Media::class,
                'multiple' => false,
                'max_per_page' => 9,
                'page' => 1,
            ])
            ->setAllowedTypes('multiple', 'boolean')
            ->setAllowedTypes('max_per_page', 'integer')
            ->setAllowedTypes('page', 'integer')
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'jk_media_gallery';
    }

    public function getParent(): string
    {
        return ChoiceType::class;
    }

    private function buildChoices(): iterable
    {
        $request = $this->requestStack->getCurrentRequest();
        $medias = $this->mediaRepository->paginate((int) $request->get('page', 1));

        return $medias->getCurrentPageResults();
    }
}
