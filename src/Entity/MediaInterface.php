<?php

namespace JK\MediaBundle\Entity;

use DateTime;

interface MediaInterface
{
    const TYPE_ARTICLE_THUMBNAIL = 'article_thumbnail';

    /**
     * Return the Media id.
     */
    public function getId(): ?int;

    /**
     * Return the Media name.
     */
    public function getName(): string;

    /**
     * Return the Media file name.
     */
    public function getFileName(): string;

    /**
     * Return the Media file type.
     */
    public function getFileType(): string;

    /**
     * Return the Media file type.
     */
    public function getType(): string;

    /**
     * Return the Media file size.
     */
    public function getSize(): int;

    /**
     * Return the Media description.
     */
    public function getDescription(): string;

    public function setId(?int $id): void;

    public function setName(string $name): void;

    public function setDescription(string $description): void;

    public function setFileName(string $fileName): void;

    public function setFileType(string $fileType): void;

    public function setType(string $type): void;

    public function setSize(int $size): void;

    public function getCreatedAt(): DateTime;

    public function setCreatedAt(DateTime $createdAt): void;

    public function getUpdatedAt(): DateTime;

    public function setUpdatedAt(DateTime $updatedAt): void;
}
