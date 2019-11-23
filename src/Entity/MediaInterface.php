<?php

namespace JK\MediaBundle\Entity;

interface MediaInterface
{
    const TYPE_ARTICLE_THUMBNAIL = 'article_thumbnail';

    /**
     * Return the Media id.
     *
     * @return int|null
     */
    public function getId(): ?int;

    /**
     * Return the Media name.
     *
     * @return string
     */
    public function getName(): string;

    /**
     * Return the Media file name.
     *
     * @return string
     */
    public function getFileName(): string;

    /**
     * Return the Media file type.
     *
     * @return string
     */
    public function getFileType(): string;

    /**
     * Return the Media file type.
     *
     * @return string
     */
    public function getType(): string;

    /**
     * Return the Media file size.
     *
     * @return int
     */
    public function getSize(): int;

    /**
     * Return the Media description.
     *
     * @return string
     */
    public function getDescription(): string;
}
