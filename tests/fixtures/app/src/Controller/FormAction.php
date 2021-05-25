<?php

namespace App\Controller;

use App\Form\Type\BlogEntryType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class FormAction
{
    private FormFactoryInterface $formFactory;
    private Environment $environment;

    public function __construct(FormFactoryInterface $formFactory, Environment $environment)
    {
        $this->formFactory = $formFactory;
        $this->environment = $environment;
    }

    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(BlogEntryType::class);
        $form->handleRequest($request);

        return new Response($this->environment->render('media_form.html.twig', [
            'form' => $form->createView(),
        ]));
    }
}
