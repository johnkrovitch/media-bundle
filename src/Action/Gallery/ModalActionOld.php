<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Gallery;

use JK\MediaBundle\Form\Type\GalleryType;
use JK\MediaBundle\Handler\Form\Tinymce\AddGalleryHandler;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

/**
 * Display and handle the gallery modal to choose one or several Media.
 */
class ModalActionOld
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
     * @var MediaRepositoryInterface
     */
    private $repository;

    /**
     * @var AddGalleryHandler
     */
    private $handler;

    public function __construct(
        Environment $environment,
        FormFactoryInterface $formFactory,
        MediaRepositoryInterface $repository,
        AddGalleryHandler $handler
    ) {
        $this->environment = $environment;
        $this->formFactory = $formFactory;
        $this->repository = $repository;
        $this->handler = $handler;
    }

    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(GalleryType::class, null, [
            'multiple' => true,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->handler->handle($form);
        }

        return new Response($this->environment->render('@JKMedia/Gallery/modal-content.html.twig', [
            'form' => $form->createView(),
        ]));
    }
}
