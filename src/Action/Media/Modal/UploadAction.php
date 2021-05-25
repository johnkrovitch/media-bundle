<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Media\Modal;

use JK\MediaBundle\Form\Type\MediaType;
use JK\MediaBundle\Form\Type\UploadType;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class UploadAction
{
    private UploaderInterface $uploader;
    private FormFactoryInterface $formFactory;
    private MediaRepositoryInterface $mediaRepository;
    private Environment $environment;

    public function __construct(
        UploaderInterface $uploader,
        FormFactoryInterface $formFactory,
        MediaRepositoryInterface $mediaRepository,
        Environment $environment
    ) {
        $this->uploader = $uploader;
        $this->formFactory = $formFactory;
        $this->mediaRepository = $mediaRepository;
        $this->environment = $environment;
    }

    public function __invoke(Request $request): Response
    {
        $form = $this->formFactory->create(UploadType::class, ['mediaType' => $request->get('type')]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            if ($data['uploadType'] === MediaType::UPLOAD_FROM_COMPUTER) {
                $media = $this->uploader->upload($data['file'], $data['mediaType']);
            } else {
                $media = $this->mediaRepository->get($data['gallery']);
            }

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
