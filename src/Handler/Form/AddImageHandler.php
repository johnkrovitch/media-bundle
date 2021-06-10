<?php

declare(strict_types=1);

namespace JK\MediaBundle\Handler\Form;

use Exception;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Form\Type\MediaType;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Twig\Environment;

class AddImageHandler
{
    /**
     * @var MediaRepositoryInterface
     */
    private $repository;

    /**
     * @var Environment
     */
    private $environment;

    /**
     * @var UploaderInterface
     */
    private $uploader;

    public function __construct(
        MediaRepositoryInterface $repository,
        Environment $environment,
        UploaderInterface $uploader
    ) {
        $this->repository = $repository;
        $this->environment = $environment;
        $this->uploader = $uploader;
    }

    public function handle(FormInterface $form): Response
    {
        $data = $form->getData();
        $media = null;

        if (MediaType::CHOOSE_FROM_COLLECTION === $data['uploadType']) {
            $media = $this->repository->find($data['gallery']);

            if (!$media instanceof MediaInterface) {
                throw new NotFoundHttpException('No Media with id "'.$data['gallery'].'" found');
            }
        }

        if (MediaType::UPLOAD_FROM_COMPUTER === $data['uploadType']) {
            $media = $this->uploader->upload($data['upload'], MediaInterface::TYPE_ARTICLE_THUMBNAIL);
        }

        if (!$media instanceof MediaInterface) {
            throw new Exception('Unable to handle the form media form. The upload type "'.$data['uploadType'].'" is not handled.');
        }

        return new Response($this->environment->render('@JKMedia/TinyMce/image.html.twig', [
            'media' => $media,
        ]));
    }
}
