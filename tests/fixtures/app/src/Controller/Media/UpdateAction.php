<?php

namespace App\Controller\Media;

use JK\MediaBundle\Form\Type\MediaType;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Twig\Environment;

class UpdateAction
{
    public function __construct(
        private MediaRepositoryInterface $repository,
        private FormFactoryInterface $formFactory,
        private Environment $environment,
        private RouterInterface $router,
    )
    {
    }

    public function __invoke(Request $request): Response
    {
        $media = $this->repository->get($request->attributes->get('identifier'));
        $form = $this->formFactory->create(MediaType::class, $media);
        $form->handleRequest($request);

        return new Response($this->environment->render('media/update.html.twig', [
            'form' => $form->createView(),
        ]));
    }
}
