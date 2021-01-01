<?php

namespace JK\MediaBundle\Form\Handler;

use Exception;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Twig\Environment;

class ChooseMediaHandler
{
    private MediaRepositoryInterface $repository;
    private Environment $environment;
    private UploaderInterface $uploader;
    
    public function __construct(
        MediaRepositoryInterface $repository,
        Environment $environment,
        UploaderInterface $uploader
    ) {
        $this->repository = $repository;
        $this->environment = $environment;
        $this->uploader = $uploader;
    }
    
    public function handle(FormInterface $form): MediaInterface
    {
        $data = $form->getData();
        $media = null;
        
        if ($data['uploadType'] === 'gallery') {
            $media = $this->repository->find($data['gallery']);
            
            if (!$media instanceof MediaInterface) {
                throw new NotFoundHttpException('No Media with id "'.$data['gallery'].'" found');
            }
    
            return $media;
        }
        
        if ($data['uploadType'] === 'upload') {
            return $this->uploader->upload($data['upload'], MediaInterface::TYPE_ARTICLE_THUMBNAIL);
        }
    
        throw new Exception(sprintf(
            'Unable to handle the form media form. The upload type "%s" is not handled.',
            $data['uploadType']
        ));
    }
}
