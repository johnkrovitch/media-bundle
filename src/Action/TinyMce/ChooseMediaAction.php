<?php

namespace JK\MediaBundle\Action\TinyMce;

use JK\MediaBundle\Form\Handler\ChooseMediaHandler;
use JK\MediaBundle\Form\Type\ChooseMediaType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class ChooseMediaAction
{
    private FormFactoryInterface $formFactory;
    private Environment $environment;
    private ChooseMediaHandler $handler;
    
    public function __construct(FormFactoryInterface $formFactory, Environment $environment, ChooseMediaHandler $handler)
    {
        $this->formFactory = $formFactory;
        $this->environment = $environment;
        $this->handler = $handler;
    }
    
    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(ChooseMediaType::class);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            $media = $this->handler->handle($form);
    
            return new Response($this->environment->render('@JKMedia/tinymce/media.html.twig', [
                'media' => $media,
            ]));
        }
    
        return new Response($this->environment->render('@JKMedia/tinymce/choose-media.html.twig', [
            'form' => $form->createView(),
        ]), $this->getResponseCode($form));
    }
    
    private function getResponseCode(FormInterface $form): int
    {
        if (!$form->isSubmitted()) {
            return Response::HTTP_OK;
        }
    
        return $form->isValid() ? Response::HTTP_OK : Response::HTTP_INTERNAL_SERVER_ERROR;
    }
}
