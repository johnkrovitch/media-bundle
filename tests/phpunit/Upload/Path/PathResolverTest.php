<?php

namespace JK\MediaBundle\Tests\Upload\Path;

use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Tests\TestCase;
use JK\MediaBundle\Upload\Path\RelativePathResolver;
use JK\MediaBundle\Upload\Path\RelativePathResolverInterface;

class PathResolverTest extends TestCase
{
    public function testService(): void
    {
        $this->assertServiceExists(RelativePathResolverInterface::class);
        $this->assertServiceExists(RelativePathResolver::class);
    }

    /**
     * @dataProvider resolveDataProvider
     */
    public function testResolve(string $fileName, ?string $type, string $expectedResult): void
    {
        $resolver = new RelativePathResolver([
            'my_type' => 'my-directory',
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
            ['My File.png', null, '^\/my_file_.*.png^'],
            ['My File', null, '^\/my_file_.*^'],
            ['My File.png', 'my_type', '^\/my-directory/my_file_.*.png^'],
            ['My File.png', 'wrong', '^\/my-directory/my_file_.*.png^'],
        ];
    }
}
