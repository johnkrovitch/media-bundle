<?php

namespace App\Controller;

use App\Form\Type\BlogEntryType;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class FormAction
{
    public function __construct(
        private FormFactoryInterface $formFactory,
        private Environment $environment,
        private MediaRepositoryInterface $mediaRepository,
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
            dump($data);
            die;
            $this->mediaRepository->add($data);
        }

        return new Response($this->environment->render('media_form.html.twig', [
            'form' => $form->createView(),
            'data' => $data,
        ]));
    }
}
