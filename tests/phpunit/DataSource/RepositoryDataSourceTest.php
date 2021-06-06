<?php

namespace JK\MediaBundle\Tests\DataSource;

use JK\MediaBundle\DataSource\Context\FormContext;
use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\DataSource\RepositoryDataSource;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Repository\MediaRepositoryInterface;
use JK\MediaBundle\Tests\TestCase;
use PHPUnit\Framework\MockObject\MockObject;

class RepositoryDataSourceTest extends TestCase
{
    private RepositoryDataSource $dataSource;
    private MockObject $mediaRepository;

    public function testService(): void
    {
        $this->assertServiceExists(RepositoryDataSource::class);
    }

    /**
     * @dataProvider supportsDataProvider
     */
    public function testSupports(DataSourceContext $context, bool $excepted): void
    {
        $result = $this->dataSource->supports($context);
        $this->assertEquals($excepted, $result);
    }

    public function supportsDataProvider(): iterable
    {
        $context = new FormContext(MediaInterface::DATASOURCE_GALLERY, []);
        yield [$context, true];

        $context = new FormContext('my_context', []);
        yield [$context, false];
    }

    protected function setUp(): void
    {
        $this->mediaRepository = $this->createMock(MediaRepositoryInterface::class);
        $this->dataSource = new RepositoryDataSource($this->mediaRepository);
    }
}
