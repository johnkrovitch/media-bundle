<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\DataSource\Context\FormContext;
use JK\MediaBundle\DataSource\DataSourceInterface;
use JK\MediaBundle\Form\Type\MediaSelectType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class SelectAction
{
    private FormFactoryInterface $formFactory;
    private Environment $environment;
    private DataSourceInterface $dataSource;

    public function __construct(
        FormFactoryInterface $formFactory,
        DataSourceInterface $dataSource,
        Environment $environment
    ) {
        $this->formFactory = $formFactory;
        $this->environment = $environment;
        $this->dataSource = $dataSource;
    }

    public function __invoke(Request $request): Response
    {
        $mediaType = $request->get('type');
        $form = $this->formFactory->create(MediaSelectType::class, ['mediaType' => $mediaType]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $context = new FormContext($data['uploadType'], [
                'uploaded_file' => $data['file'] ?? null,
                'gallery_media_id' => $data['gallery'] ?? null,
                'media_type' => $mediaType,
            ]);

            if (!$this->dataSource->supports($context)) {
                return new JsonResponse(['error' => 'The upload type is not supported'], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $media = $this->dataSource->get($context);

            return new JsonResponse([
                'id' => $media->getId(),
                'name' => $media->getName(),
                'path' => $media->getPath(),
            ]);
        }

        return new Response($this->environment->render('@JKMedia/media/select.twig', [
            'form' => $form->createView(),
        ]), $form->isSubmitted() ? Response::HTTP_UNPROCESSABLE_ENTITY : Response::HTTP_OK);
    }
}
