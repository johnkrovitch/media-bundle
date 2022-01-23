<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Upload;

use JK\MediaBundle\Assets\Path\PublicPathResolver;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\UploaderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class EndpointAction
{
    public function __construct(
        private UploaderInterface $uploader,
        private ValidatorInterface $validator,
        private MediaRepositoryInterface $mediaRepository,
        private PublicPathResolver $publicPathResolver,
    ) {
    }

    public function __invoke(Request $request): Response
    {
        $file = $request->files->get('file');
        $errors = $this->validator->validate($file, [new File([
            'mimeTypes' => ['image/png', 'image/jpeg'],
            'maxSize' => '20M',
        ])]);

        if ($errors->count() > 0) {
            return new JsonResponse($this->formatErrors($errors), Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $media = $this->mediaRepository->create();
        $this->uploader->upload($file, $media);
        $this->mediaRepository->add($media);

        return new JsonResponse([
            'id' => $media->getId(),
            'name' => $media->getName(),
            'path' => $this->publicPathResolver->resolve($media, $media->getType()),
        ], Response::HTTP_CREATED);
    }

    private function formatErrors(ConstraintViolationListInterface $violationList): array
    {
        $errors = [];

        foreach ($violationList as $error) {
            $errors[] = [
                'message' => $error->getMessage(),
                'path' => $error->getPropertyPath(),
                'cause' => $error->getCause(), // @phpstan-ignore-line
                'code' => $error->getCode(),
            ];
        }

        return [
            'errors' => $errors,
        ];
    }
}
