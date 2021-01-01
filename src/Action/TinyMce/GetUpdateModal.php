<?php

namespace JK\MediaBundle\Action\TinyMce;

use JK\MediaBundle\Form\Type\TinyMceImageEditType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

/** @deprecated  */
class GetUpdateModal
{
    /**
     * @var Environment
     */
    private $environment;

    /**
     * @var FormFactoryInterface
     */
    private $formFactory;

    public function __construct(Environment $environment, FormFactoryInterface $formFactory)
    {
        $this->environment = $environment;
        $this->formFactory = $formFactory;
    }

    public function __invoke(Request $request)
    {
        $data = $request->query->get('attributes', []);
        $form = $this->formFactory->create(TinyMceImageEditType::class, $data);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return new Response($form->getData(), Response::HTTP_PARTIAL_CONTENT);
        }
        $content = $this->environment->render('@JKCms/TinyMce/image.edit.modal-content.html.twig', [
            'form' => $form->createView(),
        ]);

        return new Response($content);
    }
}
