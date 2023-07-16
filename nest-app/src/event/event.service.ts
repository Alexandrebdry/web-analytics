import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEventDto } from './dto/create.event.dto';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
    constructor(@InjectModel('Event') private eventModel: Model<Event>) {}

    async create(createEventDto: CreateEventDto): Promise<Event> {
        const createdEvent = new this.eventModel(createEventDto);
        return await createdEvent.save();
    }

    async findAll(userId: number): Promise<Event[]> {
        return this.eventModel.find({
            userId: userId
        }).exec();
    }

    async findByFilters(filters: any): Promise<Event[]> {
        return this.eventModel.find(filters).exec();
    }
}
