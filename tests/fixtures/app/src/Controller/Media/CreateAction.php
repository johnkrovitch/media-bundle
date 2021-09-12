<?php

namespace App\Controller\Media;

use App\Form\Type\BlogEntryType;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Twig\Environment;

class CreateAction
{
    public function __construct(
        private FormFactoryInterface $formFactory,
        private Environment $environment,
        private RouterInterface $router,
    )
    {
    }

    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(BlogEntryType::class);
        $form->handleRequest($request);
        $data = [];

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            return new RedirectResponse($this->router->generate('media_update', ['identifier' => $data['media']->getIdentifier()]));

        }
        //dump($form);
        //die;

        return new Response($this->environment->render('media_form.html.twig', [
            'form' => $form->createView(),
        ]));
    }
}
