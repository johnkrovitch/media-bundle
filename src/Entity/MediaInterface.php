<?php

declare(strict_types=1);

namespace JK\MediaBundle\Entity;

use DateTime;

interface MediaInterface
{
    public const TYPE_ARTICLE_THUMBNAIL = 'article_thumbnail';

    public function getId(): ?int;

    public function getDescription(): string;

    public function setDescription(string $description): void;

    public function getName(): string;

    public function setFileName(string $fileName): void;

    public function getFileName(): string;

    public function getFileType(): string;

    public function setFileType(string $fileType): void;

    public function getType(): string;

    public function setType(string $type): void;

    public function getSize(): int;

    public function setSize(int $size): void;

    public function setName(string $name): void;

    public function getCreatedAt(): DateTime;

    public function setCreatedAt(DateTime $createdAt): void;

    public function getUpdatedAt(): DateTime;

    public function setUpdatedAt(DateTime $updatedAt): void;

    public function getPath(): string;

    public function setPath(string $path): void;

    public function getIdentifier(): string;
}
