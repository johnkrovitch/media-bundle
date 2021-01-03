<?php

namespace JK\MediaBundle\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Table(name="cms_media")
 * @ORM\Entity(repositoryClass="JK\MediaBundle\Repository\MediaRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 * @UniqueEntity("name")
 */
class Media implements MediaInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected ?int $id;

    /**
     * @ORM\Column(type="string")
     */
    protected string $name = '';

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected string $description = '';

    /**
     * @ORM\Column(type="string", nullable=true, name="fileName")
     */
    protected string $fileName = '';

    /**
     * @ORM\Column(type="string", nullable=true, name="fileType")
     */
    protected string $fileType = '';

    /**
     * @ORM\Column(type="string")
     */
    protected string $type = MediaInterface::TYPE_ARTICLE_THUMBNAIL;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    protected ?string $size = '';

    /**
     * @ORM\Column(type="datetime", name="createdAt")
     *
     * @Gedmo\Timestampable(on="create")
     */
    protected DateTime $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updatedAt"))
     *
     * @Gedmo\Timestampable(on="update")
     */
    protected DateTime $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function setId(?int $id): void
    {
        $this->id = $id;
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
}
