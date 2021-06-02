<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Media\Modal;

use JK\MediaBundle\Form\Type\UploadType;
use JK\MediaBundle\Media\Handler\MediaHandlerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class UploadAction
{
    private FormFactoryInterface $formFactory;
    private MediaHandlerInterface $mediaHandler;
    private Environment $environment;

    public function __construct(
        FormFactoryInterface $formFactory,
        MediaHandlerInterface $mediaHandler,
        Environment $environment
    ) {
        $this->formFactory = $formFactory;
        $this->environment = $environment;
        $this->mediaHandler = $mediaHandler;
    }

    public function __invoke(Request $request): Response
    {
        $mediaType = $request->get('type');
        $form = $this->formFactory->create(UploadType::class, ['mediaType' => $mediaType]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $media = $this->mediaHandler->handle([
                'uploaded_file' => $data['file'] ?? null,
                'upload_type' => $data['uploadType'],
                'gallery_media_id' => $data['gallery'] ?? null,
                'media_type' => $mediaType,
            ]);

            return new JsonResponse([
                'id' => $media->getId(),
                'name' => $media->getName(),
                'path' => $media->getPath(),
            ]);
        }

        return new Response($this->environment->render('@JKMedia/media/modal/upload.html.twig', [
            'form' => $form->createView(),
        ]), $form->isSubmitted() ? Response::HTTP_UNPROCESSABLE_ENTITY : Response::HTTP_OK);
    }
}
