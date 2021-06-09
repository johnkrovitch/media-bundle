<?php

namespace JK\MediaBundle\Handler\Form\Tinymce;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

/** @deprecated  */
class AddGalleryHandler
{
    /**
     * @var MediaRepositoryInterface
     */
    private $repository;

    /**
     * @var Environment
     */
    private $environment;

    public function __construct(MediaRepositoryInterface $repository, Environment $environment)
    {
        $this->repository = $repository;
        $this->environment = $environment;
    }

    public function handle(FormInterface $form): Response
    {
        $data = $form->getData();

        $medias = $this->repository->findBy([
            'id' => explode(',', $data),
        ]);

        return new Response($this->environment->render('render.html.twig', [
            'mediaList' => $medias,
        ]));
    }
}
