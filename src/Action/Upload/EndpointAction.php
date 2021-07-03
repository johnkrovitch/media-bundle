<?php

declare(strict_types=1);

namespace JK\MediaBundle\Action\Upload;

use JK\MediaBundle\Entity\Media;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class EndpointAction
{
    private UploaderInterface $uploader;
    private ValidatorInterface $validator;
    private MediaRepositoryInterface $mediaRepository;

    public function __construct(
        UploaderInterface $uploader,
        ValidatorInterface $validator,
        MediaRepositoryInterface $mediaRepository
    ) {
        $this->uploader = $uploader;
        $this->validator = $validator;
        $this->mediaRepository = $mediaRepository;
    }

    public function __invoke(Request $request): Response
    {
        $file = $request->files->get('file');
        $errors = $this->validator->validate($file, [new File([
            'mimeTypes' => ['image/png', 'image/jpeg'],
            'maxSize' => '20M',
        ])]);

        if ($errors->count() > 0) {
            $data = ['errors' => []];

            /** @var ConstraintViolation $error */
            foreach ($errors as $error) {
                $data['errors'][] = [
                    'message' => $error->getMessage(),
                    'path' => $error->getPropertyPath(),
                    'cause' => $error->getCause(),
                    'code' => $error->getCode(),
                ];
            }

            return new JsonResponse($data, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $media = new Media();
        $this->uploader->upload($file, $media);
        $this->mediaRepository->add($media);

        return new JsonResponse([
            'id' => $media->getId(),
            'name' => $media->getName(),
            'path' => $media->getPath(),
        ], Response::HTTP_CREATED);
    }
}
