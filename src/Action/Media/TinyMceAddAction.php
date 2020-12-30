<?php

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Form\Type\AddMediaType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class TinyMceAddAction
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
        $form = $this->formFactory->create(AddMediaType::class);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            die('ok');
        }
    
        return new Response($this->environment->render('@JKMedia/tinymce/add-media.html.twig', [
            'form' => $form->createView(),
        ]));
    }
}
