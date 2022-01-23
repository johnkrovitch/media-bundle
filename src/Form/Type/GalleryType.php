<?php

declare(strict_types=1);

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Pagerfanta\PagerfantaInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GalleryType extends AbstractType
{
    public function __construct(
        private MediaRepositoryInterface $mediaRepository,
        private RequestStack $requestStack
    ) {
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $pager = $this->getPager();
        $resolver
            ->setDefaults([
                'choices' => $pager->getCurrentPageResults(),
                'choice_label' => 'name',
                'choice_value' => 'identifier',
                'data_class' => Media::class,
                'expanded' => true,
                'multiple' => false,
                'max_per_page' => 9,
                'page' => 1,
                'pager' => $pager,
                'placeholder' => false,
                'required' => false,
                'media_filter' => 'jk_media',
                'columns' => 3,
            ])
            ->setAllowedValues('expanded', [true])
            ->setAllowedTypes('multiple', 'boolean')
            ->setAllowedTypes('max_per_page', 'integer')
            ->setAllowedTypes('page', 'integer')
            ->setAllowedTypes('columns', 'integer')
        ;
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['attr']['data-controller'] = 'jk-media-gallery';
        $view->vars['attr']['data-multiple'] = $options['multiple'];
        $view->vars['media_filter'] = $options['media_filter'];

        if (empty($view->vars['row_attr']['class'])) {
            $view->vars['row_attr']['class'] = '';
        }
        $view->vars['columns'] = $options['columns'];

        if (empty($view->vars['attr']['class'])) {
            $view->vars['attr']['class'] = '';
        }
        $view->vars['attr']['class'] .= ' media-gallery';
        $view->vars['pager'] = $options['pager'];

        $data = [];

        foreach ($options['pager']->getCurrentPageResults() as $media) {
            $data[$media->getIdentifier()] = $media;
        }
        $view->vars['media_collection'] = $data;
    }

    public function getBlockPrefix(): string
    {
        return 'jk_media_gallery';
    }

    public function getParent(): string
    {
        return ChoiceType::class;
    }

    private function getPager(): PagerfantaInterface
    {
        $request = $this->requestStack->getCurrentRequest();

        return $this->mediaRepository->paginate((int) $request->get('page', 1));
    }
}
