<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Assets\Path\PublicPathResolverInterface;
use JK\MediaBundle\Form\Handler\SelectFormHandlerInterface;
use JK\MediaBundle\Form\Type\SelectType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class SelectAction
{
    public function __construct(
        private FormFactoryInterface $formFactory,
        private Environment $environment,
        private SelectFormHandlerInterface $formHandler,
        private PublicPathResolverInterface $pathResolver
    ) {
    }

    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(SelectType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $mediaCollection = $this->formHandler->handle($data['upload'], $data['gallery']);
            $content = ['members' => []];

            foreach ($mediaCollection as $media) {
                $content['members'][] = [
                    'id' => (string) $media->getIdentifier(),
                    'name' => $media->getName(),
                    'path' => $this->pathResolver->resolve($media, $media->getType()),
                ];
            }

            return new JsonResponse($content);
        }

        return new Response($this->environment->render('@JKMedia/media/select.html.twig', [
            'form' => $form->createView(),
            'hasErrors' => $form->getErrors(true)->count() > 0,
        ]), $form->isSubmitted() ? Response::HTTP_UNPROCESSABLE_ENTITY : Response::HTTP_OK);
    }
}
