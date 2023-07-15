import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { EventService } from './event.service';
import { SdkGuard } from 'src/credentials/sdk.guard';
import { CreateEventDto } from './dto/create.event.dto';

@Controller('events')
export class EventController {
    constructor(private eventService: EventService) {}

    @Post()
    @UseGuards(SdkGuard)
    async create(@Body() createEventDto: CreateEventDto, @Request() req) {
        createEventDto.userId = req.user.id;
        return await this.eventService.create(createEventDto);
    }

    @Get()
    @UseGuards(SdkGuard)
    async findAll(@Request() req) {
        return await this.eventService.findAll(req.user.id);
    }
}
