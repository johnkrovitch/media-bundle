<?php

namespace JK\MediaBundle\Entity;

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
}
