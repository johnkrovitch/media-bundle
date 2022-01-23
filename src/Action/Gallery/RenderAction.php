<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Gallery;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

// TODO useful ?
class RenderAction
{
    private MediaRepositoryInterface $repository;
    private Environment $environment;

    public function __construct(MediaRepositoryInterface $repository, Environment $environment)
    {
        $this->repository = $repository;
        $this->environment = $environment;
    }

    public function __invoke(Request $request): Response
    {
        $mediaIds = $this->extractIds($request);
        $medias = $this->repository->findBy([
            'id' => $mediaIds,
        ]);

        return new Response($this->environment->render('@JKMedia/Gallery/render.html.twig', [
            'medias' => $medias,
        ]));
    }

    private function extractIds(Request $request): array
    {
        $ids = explode(',', $request->get('ids', []));

        return array_unique($ids);
    }
}
