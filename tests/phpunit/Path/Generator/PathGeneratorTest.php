<?php

namespace JK\MediaBundle\Tests\Path\Generator;

use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Path\Generator\PathGenerator;
use JK\MediaBundle\Path\Generator\PathGeneratorInterface;
use JK\MediaBundle\Tests\TestCase;

class PathGeneratorTest extends TestCase
{
    private PathGeneratorInterface $pathGenerator;

    public function testGeneratePath(): void
    {
        $path = $this->pathGenerator->generatePath('my_file.png');

        $this->assertStringStartsWith('/', $path);
        $this->assertStringEndsWith('.png', $path);
        $this->assertStringNotContainsString('my_file.png', $path);

        $path2 = $this->pathGenerator->generatePath('my_file.png');
        $this->assertNotEquals($path, $path2);
    }

    public function testGeneratePathWithMapping(): void
    {
        $pathGenerator = new PathGenerator(['media' => 'media']);
        $path = $pathGenerator->generatePath('my_file.png', 'media');

        $this->assertStringStartsWith('/media', $path);
        $this->assertStringEndsWith('.png', $path);
        $this->assertStringNotContainsString('my_file.png', $path);
    }

    public function testGeneratePathWithoutExtension(): void
    {
        $this->expectException(MediaException::class);
        $this->pathGenerator->generatePath('my_file');
    }

    public function testGeneratePathWithInvalidType(): void
    {
        $this->expectException(MediaException::class);
        $this->pathGenerator->generatePath('my_file.png', 'wrong_type');
    }

    protected function setUp(): void
    {
        $this->pathGenerator = new PathGenerator();
    }
}
