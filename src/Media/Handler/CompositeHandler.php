<?php

namespace JK\MediaBundle\Media\Handler;

use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;

class CompositeHandler implements MediaHandlerInterface
{
    /**
     * @var iterable<MediaHandlerInterface>
     */
    private iterable $handlers;

    public function __construct(iterable $handlers)
    {
        $this->handlers = $handlers;
    }

    public function getName(): string
    {
        return 'composite';
    }

    public function getLabel(): string
    {
        return '';
    }

    public function supports(array $data = []): bool
    {
        foreach ($this->handlers as $persister) {
            if ($persister->supports($data)) {
                return true;
            }
        }

        return false;
    }

    public function handle(array $data = []): MediaInterface
    {
        foreach ($this->handlers as $persister) {
            if ($persister->supports($data)) {
                return $persister->handle($data);
            }
        }

        throw new MediaException('The media is not supported by any persisters');
    }
}
