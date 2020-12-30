<?php

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class GalleryAction
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
        $medias = $this->repository->paginate((int)$request->get('page', 1));
        
        return new Response($this->environment->render('@JKMedia/gallery/gallery.html.twig', [
            'medias' => $medias,
            'target' => $request->get('target'),
        ]));
    }
}
