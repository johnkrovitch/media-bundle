<?php

namespace JK\MediaBundle\Form\Type;

use JK\MediaBundle\Form\Transformer\JQueryUploadTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

/** @deprecated */
class JQueryUploadType extends AbstractType
{
    const UPLOAD_TYPE_FROM_COMPUTER = 'upload.from_computer';
    const UPLOAD_TYPE_FROM_LIBRARY = 'upload.from_library';
    const UPLOAD_TYPE_FROM_URL = 'upload.from_url';

    /**
     * @var JQueryUploadTransformer
     */
    protected $mediaUploadTransformer;

    /**
     * @var string
     */
    protected $useMediaLibrary;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('upload', FileType::class, [
                'attr' => [
                    'class' => 'media-file-upload',
                    'data-target' => '.'.$options['media_target'],
                ],
                'label' => 'cms.media.upload_from_computer',
                'mapped' => false,
                'property_path' => 'filename',
            ])
            ->add('id', HiddenType::class, [
                'attr' => [
                    'class' => $options['media_target'],
                ],
            ])
            ->add('upload_type', ChoiceType::class, [
                'attr' => [
                    'class' => 'upload-choice',
                ],
                'choices' => $this->getUploadTypeChoice(),
                'expanded' => true,
            ])
        ;

        $builder->addModelTransformer($this->mediaUploadTransformer);
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['media_target'] = '.'.$options['media_target'];
        $view->vars['remove_label'] = $options['remove_label'];
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults([
                'media_target' => 'media-id',
                'required' => false,
                'end_point' => 'media_gallery',
                'remove_label' => 'cms.article.remove_thumbnail',
            ])
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'jquery_upload';
    }

    private function getUploadTypeChoice(): array
    {
        $choices = [
            'cms.upload.upload_from_computer' => self::UPLOAD_TYPE_FROM_COMPUTER,
            'cms.upload.upload_from_url' => self::UPLOAD_TYPE_FROM_URL,
        ];

        if ($this->useMediaLibrary) {
            $choices['cms.upload.upload_from_library'] = self::UPLOAD_TYPE_FROM_LIBRARY;
        }

        return $choices;
    }
}
