<?php

namespace JK\MediaBundle\Action\Media;

use JK\MediaBundle\Assets\Helper\AssetsHelper;
use JK\MediaBundle\Upload\Uploader\UploaderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UploadAction
{
    private UploaderInterface $uploader;
    private AssetsHelper $helper;
    
    public function __construct(UploaderInterface $uploader, AssetsHelper $helper)
    {
        $this->uploader = $uploader;
        $this->helper = $helper;
    }
    
    public function __invoke(Request $request): Response
    {
        if (!$request->files->has('file') || !$request->request->has('type')) {
            throw new NotFoundHttpException('File is invalid or type is not provided');
        }
        $file = $request->files->get('file');
        $type = $request->request->get('type');
        $media = $this->uploader->upload($file, $type);
        $path = $this->helper->getMediaPath($media);
        
        return new JsonResponse([
            'id' => $media->getId(),
            'name' => $media->getName(),
            'path' => $path,
        ]);
    }
}
