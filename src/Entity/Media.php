<?php

declare(strict_types=1);

namespace JK\MediaBundle\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use JK\MediaBundle\Repository\MediaRepository;
use Symfony\Component\Uid\Uuid;

#[ORM\Table(name: 'jk_media')]
#[ORM\Entity(repositoryClass: MediaRepository::class)]
class Media implements MediaInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    #[ORM\Column(type: 'integer')]
    protected ?int $id;

    #[ORM\Column(type: 'uuid')]
    protected Uuid $identifier;

    #[ORM\Column(type: 'string')]
    protected string $name;

    #[ORM\Column(type: 'string')]
    protected string $path;

    #[ORM\Column(type: 'string')]
    protected string $description = '';

    #[ORM\Column(type: 'string')]
    protected string $fileName = '';

    #[ORM\Column(type: 'string')]
    protected string $fileType = '';

    #[ORM\Column(type: 'string')]
    protected string $type = MediaInterface::MEDIA_TYPE_DEFAULT;

    #[ORM\Column(type: 'integer')]
    protected ?int $size;

    #[ORM\Column(type: 'datetime')]
    protected DateTime $createdAt;

    #[ORM\Column(type: 'datetime')]
    protected DateTime $updatedAt;

    public function __construct()
    {
        $this->identifier = Uuid::v4();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    public function isValid(): bool
    {
        return isset($this->path)
            && $this->path
            && isset($this->type)
            && $this->type
        ;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getFileName(): string
    {
        return $this->fileName;
    }

    public function setFileName(string $fileName): void
    {
        $this->fileName = $fileName;
    }

    public function getFileType(): string
    {
        return $this->fileType;
    }

    public function setFileType(string $fileType): void
    {
        $this->fileType = $fileType;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): void
    {
        $this->type = $type;
    }

    public function getSize(): int
    {
        return $this->size;
    }

    public function setSize(int $size): void
    {
        $this->size = $size;
    }

    public function getCreatedAt(): DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTime $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getUpdatedAt(): DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(DateTime $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): void
    {
        $this->path = $path;
    }

    public function getIdentifier(): string
    {
        return $this->identifier->toRfc4122();
    }

    public function setIdentifier(string $identifier): void
    {
        $this->identifier = new Uuid($identifier);
    }
}
