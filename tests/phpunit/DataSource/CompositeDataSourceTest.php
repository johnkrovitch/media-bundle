<?php

namespace JK\MediaBundle\Tests\DataSource;

use JK\MediaBundle\DataSource\CompositeDataSource;
use JK\MediaBundle\DataSource\Context\DataSourceContext;
use JK\MediaBundle\DataSource\DataSourceInterface;
use JK\MediaBundle\Entity\MediaInterface;
use JK\MediaBundle\Exception\MediaException;
use JK\MediaBundle\Tests\TestCase;

class CompositeDataSourceTest extends TestCase
{
    public function testService(): void
    {
        $this->assertServiceExists(DataSourceInterface::class);
    }

    /**
     * @dataProvider supportsDataProvider
     */
    public function testSupports($dataSources, $context, $supports): void
    {
        $composite = new CompositeDataSource($dataSources);
        $this->assertEquals($composite->supports($context), $supports);
    }

    public function supportsDataProvider(): iterable
    {
        $context = $this->createMock(DataSourceContext::class);
        $dataSource1 = $this->createMock(DataSourceInterface::class);
        $dataSource2 = $this->createMock(DataSourceInterface::class);
        $dataSource1
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(false)
        ;
        $dataSource2
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(true)
        ;
        yield [[$dataSource1, $dataSource2], $context, true];

        $dataSource1 = $this->createMock(DataSourceInterface::class);
        $dataSource1
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(false)
        ;
        yield [[$dataSource1], $context, false];
    }

    public function testGet(): void
    {
        $context = $this->createMock(DataSourceContext::class);
        $media = $this->createMock(MediaInterface::class);
        $dataSource = $this->createMock(DataSourceInterface::class);
        $dataSource
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(true)
        ;
        $dataSource
            ->expects($this->once())
            ->method('get')
            ->with($context)
            ->willReturn($media)
        ;
        $composite = new CompositeDataSource([$dataSource]);
        $result = $composite->get($context);
        $this->assertEquals($media, $result);
    }

    public function testGetWithoutSupports(): void
    {
        $context = $this->createMock(DataSourceContext::class);
        $media = $this->createMock(MediaInterface::class);
        $dataSource = $this->createMock(DataSourceInterface::class);
        $dataSource
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(false)
        ;
        $dataSource
            ->expects($this->never())
            ->method('get')
            ->with($context)
            ->willReturn($media)
        ;
        $composite = new CompositeDataSource([$dataSource]);
        $this->expectException(MediaException::class);
        $composite->get($context);
    }

    public function testGetCollection(): void
    {
        $context = $this->createMock(DataSourceContext::class);
        $media = $this->createMock(MediaInterface::class);
        $dataSource = $this->createMock(DataSourceInterface::class);
        $dataSource
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(true)
        ;
        $dataSource
            ->expects($this->once())
            ->method('getCollection')
            ->with($context)
            ->willReturn([$media])
        ;
        $composite = new CompositeDataSource([$dataSource]);
        $result = $composite->getCollection($context);
        $this->assertEquals([$media], $result);
    }

    public function testGetCollectionWithoutSupports(): void
    {
        $context = $this->createMock(DataSourceContext::class);
        $dataSource = $this->createMock(DataSourceInterface::class);
        $dataSource
            ->expects($this->once())
            ->method('supports')
            ->with($context)
            ->willReturn(false)
        ;
        $dataSource
            ->expects($this->never())
            ->method('getCollection')
            ->with($context)
        ;
        $composite = new CompositeDataSource([$dataSource]);
        $this->expectException(MediaException::class);
        $composite->getCollection($context);
    }
}
