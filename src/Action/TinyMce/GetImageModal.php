<?php

namespace JK\MediaBundle\Action\TinyMce;

use JK\MediaBundle\Form\Type\TinyMceImageInsertType;
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

    public function __construct(Environment $environment, FormFactoryInterface $formFactory)
    {
        $this->environment = $environment;
        $this->formFactory = $formFactory;
    }

    public function __invoke(Request $request)
    {
        $form = $this->formFactory->create(TinyMceImageInsertType::class);

        $content = $this->environment->render('@JKMedia/TinyMce/image-insert.modal.html.twig', [
            'form' => $form->createView(),
        ]);

        return new Response($content);
    }
}
