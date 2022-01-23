<?php

declare(strict_types=1);

namespace JK\MediaBundle\Entity;

use DateTime;

interface MediaInterface
{
    public const MEDIA_TYPE_DEFAULT = 'jk_media';
    public const DATASOURCE_COMPUTER = 'computer';
    public const DATASOURCE_GALLERY = 'gallery';

    public function getId(): ?int;

    public function isValid(): bool;

    public function getIdentifier(): string;

    public function setIdentifier(string $identifier): void;

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
}
