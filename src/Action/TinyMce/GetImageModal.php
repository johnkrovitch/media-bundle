<?php

namespace JK\MediaBundle\Action\TinyMce;

use JK\MediaBundle\Form\Type\UploadModalType;
use JK\MediaBundle\Handler\Form\AddImageHandler;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class GetImageModal
{
    /**
     * @var Environment
     */
    private $environment;

    /**
     * @var FormFactoryInterface
     */
    private $formFactory;

    /**
     * @var AddImageHandler
     */
    private $handler;

    public function __construct(Environment $environment, FormFactoryInterface $formFactory, AddImageHandler $handler)
    {
        $this->environment = $environment;
        $this->formFactory = $formFactory;
        $this->handler = $handler;
    }

    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(UploadModalType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->handler->handle($form);
        }
        $content = $this->environment->render('@JKMedia/TinyMce/image-insert.modal.html.twig', [
            'form' => $form->createView(),
        ]);

        if ($form->isSubmitted() && !$form->isValid()) {
            return new Response($content, Response::HTTP_BAD_REQUEST);
        }

        return new Response($content);
    }
}
