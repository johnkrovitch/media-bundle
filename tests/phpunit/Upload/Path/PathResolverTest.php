<?php

namespace JK\MediaBundle\Tests\Upload\Path;

use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Upload\Path\PathResolver;
use JK\MediaBundle\Upload\Path\PathResolverInterface;

class PathResolverTest extends TestCase
{
    public function testService(): void
    {
        $this->assertServiceExists(PathResolverInterface::class);
        $this->assertServiceExists(PathResolver::class);
    }

    /**
     * @dataProvider resolveDataProvider
     */
    public function testResolve(string $fileName, ?string $type, string $expectedResult): void
    {
        $resolver = new PathResolver('/path/upload', [
            'my_type' => 'type_directory',
        ]);

        if ($type === 'wrong') {
            $this->expectException(MediaException::class);
        }
        $result = $resolver->resolve($fileName, $type);
        $this->assertMatchesRegularExpression($expectedResult, $result);
    }

    public function resolveDataProvider(): array
    {
        return [
            ['My File.png', null, '^\/path\/upload\/my_file_.*.png^'],
            ['My File', null, '^\/path\/upload\/my_file_.*^'],
            ['My File.png', 'my_type', '^\/path\/upload\/my_file_.*.png^'],
            ['My File.png', 'wrong', '^\/path\/upload\/my_file_.*.png^'],
        ];
    }
}
