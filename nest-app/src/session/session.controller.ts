import { Body, Controller, Get, Post } from '@nestjs/common';
import { Session, SessionDocument } from './schemas/session.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
    constructor(
        private sessionService: SessionService
    ) { }

    @Get()
    async findAllSessions(): Promise<Session[]> {
        return this.sessionService.findAll();
    }

    @Post()
    async createSession(
        @Body()
        session: Session
    ): Promise<Session> {
        return this.sessionService.create(session);
    }

    @Get('/create-fixtures')
    async createSessionFixtures(): Promise<void> {
        const sessions = [
            {
                userId: '1',
                duration: 1200000, // 20 minutes
                mail: 'smekhiche1@myges.fr',
            },
            {
                userId: '2',
                duration: 1800000, // 30 minutes
                mail: 'jdoe1@example.com',
            },
            {
                userId: '3',
                duration: 2400000, // 40 minutes
                mail: 'jdoe2@example.com',
            },
            {
                userId: '4',
                duration: 900000, // 15 minutes
                mail: 'jdoe3@example.com',
            },
            {
                userId: '5',
                duration: 3000000, // 50 minutes
                mail: 'jdoe4@example.com',
            },
            {
                userId: '6',
                duration: 7200000, // 120 minutes
                mail: 'jdoe5@example.com',
            },
            {
                userId: '7',
                duration: 5400000, // 90 minutes
                mail: 'jdoe6@example.com',
            },
            {
                userId: '8',
                duration: 2100000, // 35 minutes
                mail: 'jdoe7@example.com',
            },
            {
                userId: '9',
                duration: 4800000, // 80 minutes
                mail: 'jdoe8@example.com',
            },
            {
                userId: '10',
                duration: 6000000, // 100 minutes
                mail: 'jdoe9@example.com',
            },
            {
                userId: '11',
                duration: 3600000, // 60 minutes
                mail: 'jdoe10@example.com',
            },
        ];

        sessions.forEach(async (session) => {
            await this.sessionService.create(session);
        });
    }

    @Get('/average-duration')
    async getAverageDuration(): Promise<string> {
        const sessions = await this.sessionService.findAll();
        const averageDuration = this.sessionService.getAverageDuration(sessions);
        return averageDuration;
    }
}
