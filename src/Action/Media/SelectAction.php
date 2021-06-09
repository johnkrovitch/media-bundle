<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Form\Handler\SelectFormHandlerInterface;
use JK\MediaBundle\Form\Type\SelectType;
use JK\MediaBundle\Upload\Path\PathResolverInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class SelectAction
{
    private FormFactoryInterface $formFactory;
    private Environment $environment;
    private SelectFormHandlerInterface $formHandler;
    private PathResolverInterface $pathResolver;

    public function __construct(
        FormFactoryInterface $formFactory,
        Environment $environment,
        SelectFormHandlerInterface $formHandler,
        PathResolverInterface $pathResolver
    ) {
        $this->formFactory = $formFactory;
        $this->environment = $environment;
        $this->formHandler = $formHandler;
        $this->pathResolver = $pathResolver;
    }

    public function __invoke(Request $request): Response
    {
        $mediaType = $request->get('type');
        $form = $this->formFactory->create(SelectType::class, ['mediaType' => $mediaType]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $mediaCollection = $this->formHandler->handle(
                $data['selectType'],
                $mediaType,
                $data['file'] ?? null,
                $data['gallery'] ?? [],
            );
            $content = ['members' => []];

            foreach ($mediaCollection as $media) {
                $content['members'][] = [
                    'id' => $media->getId(),
                    'name' => $media->getName(),
                    'path' => $this->pathResolver->resolve($media->getFileName(), $media->getType()),
                ];
            }

            return new JsonResponse($content);
        }

        return new Response($this->environment->render('@JKMedia/media/select.twig', [
            'form' => $form->createView(),
        ]), $form->isSubmitted() ? Response::HTTP_UNPROCESSABLE_ENTITY : Response::HTTP_OK);
    }
}
