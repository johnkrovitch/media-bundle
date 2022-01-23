<?php

namespace App\Controller\Gallery;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class IndexAction
{
    public function __construct(
        private MediaRepositoryInterface $repository,
        private Environment $environment,
    )
    {
    }

    public function __invoke(Request $request): Response
    {
        $medias = $this->repository->paginate($request->query->getInt('page', 1), 20);

        return new Response($this->environment->render('gallery/index.html.twig', ['medias' => $medias]));
    }
}
