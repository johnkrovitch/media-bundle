<?php

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class ListAction
{
    private Environment $environment;
    private MediaRepositoryInterface $repository;

    public function __construct(Environment $environment, MediaRepositoryInterface $repository)
    {
        $this->environment = $environment;
        $this->repository = $repository;
    }

    public function __invoke(Request $request): Response
    {
        $medias = $this->repository->paginate((int) $request->get('page', 1));

        return new Response($this->environment->render('@JKMedia/Gallery/modal.html.twig', [
            'medias' => $medias,
        ]));
    }
}
