import { Body, Controller, Post, Get, UseGuards, Request, Req, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { SdkGuard } from 'src/credentials/sdk.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateEventDto } from './dto/create.event.dto';
import { ReportsService } from 'src/reports/reports.service';

@Controller('events')
export class EventController {
    constructor(
        private reportsService: ReportsService,
        private eventService: EventService
    ) {}

    @Post()
    @UseGuards(SdkGuard)
    async create(@Body() createEventDto: CreateEventDto, @Request() req) {
        createEventDto.userId = req.user.id;
        return await this.eventService.create(createEventDto);
    }

    @Get()
    @UseGuards(AuthGuard)
    async findAll(@Request() req) {
        return await this.eventService.findAll(req.user.id);
    }

    @Get(':reportId')
    @UseGuards(AuthGuard)
    async findByReport(@Request() req, @Req() request, @Param('reportId') reportId: string) {
        const report = await this.reportsService.findOne(parseInt(reportId));

        if (!report) {
            return [];
        }

        const filters: any = {};

        if (report.filters) {
            for (const filter of report.filters as any[]) {
                Object.keys(filter).forEach(key => {
                    filters[key] = filter[key];
                });
            }
        }

        if (report.timeScaleStart) {
            filters.date = {
                $gte: report.timeScaleStart,
            };
        }

        if (report.timeScaleEnd) {
            filters.date = {
                ...filters.date,
                $lte: report.timeScaleEnd,
            };
        }

        filters.userId = req.user.id;
        if (req.user.roles.includes('ROLE_ADMIN')) {
            filters.userId = report.userId;
        }

        return await this.eventService.findByFilters(filters);
    }
}
