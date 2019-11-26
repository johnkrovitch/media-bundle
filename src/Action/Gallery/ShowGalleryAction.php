<?php

namespace JK\MediaBundle\Action\Gallery;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class ShowGalleryAction
{
    /**
     * @var Environment
     */
    private $environment;

    /**
     * @var MediaRepositoryInterface
     */
    private $repository;

    public function __construct(Environment $environment, MediaRepositoryInterface $repository)
    {
        $this->environment = $environment;
        $this->repository = $repository;
    }

    public function __invoke(): Response
    {
        $medias = $this->repository->findAll();

        return new Response($this->environment->render('@JKMedia/Gallery/show.html.twig', [
            'medias' => $medias,
        ]));
    }
}
