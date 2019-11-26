<?php

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UploadMediaAjaxAction
{
    /**
     * @var UploaderInterface
     */
    private $uploader;

    public function __construct(UploaderInterface $uploader)
    {
        $this->uploader = $uploader;
    }

    public function __invoke(Request $request)
    {
        if (!$request->files->has('file') || !$request->request->has('type')) {
            throw new NotFoundHttpException('File is invalid or type is not provided');
        }
        $file = $request->files->get('file');
        $type = $request->request->get('type');

        $this->uploader->upload($file, $type);

        return new JsonResponse();
    }
}
