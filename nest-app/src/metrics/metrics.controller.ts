import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Metrics } from './schemas/metrics.schema';

@Controller('metrics')
export class MetricsController {
    constructor(private readonly metricsService: MetricsService) { }

    @Get()
    getAll(): Promise<Metrics[]> {
        return this.metricsService.findAll();
    }

    @Get(':uuid')
    get(@Param('uuid') uuid: string): Promise<Metrics> {
        return this.metricsService.findOne(uuid);
    }

    @Post()
    create(@Body() metrics: Metrics): Promise<Metrics> {
        return this.metricsService.create(metrics);
    }

    @Put(':uuid')
    update(@Param('uuid') uuid: string, @Body() metrics: Metrics): Promise<any> {
        return this.metricsService.update(uuid, metrics);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string): Promise<any> {
        return this.metricsService.remove(uuid);
    }
}
