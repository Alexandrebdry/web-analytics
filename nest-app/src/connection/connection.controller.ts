import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { Connection } from './schemas/connection.schema';
import * as moment from 'moment';
@Controller('connection')
export class ConnectionController {
    constructor(
        private connectionService: ConnectionService
    ) { }

    @Get()
    async findAllConnections(): Promise<Connection[]> {
        // await this.connectionService.deleteOldConnections();
        return this.connectionService.findAll();
    }

    @Get('/formatted')
    async findAllConnectionsFormated(): Promise<Connection[]> {
        const connections = await this.connectionService.findAll();
        
        return this.connectionService.formatConnectionData(connections) as Connection[];
    }

    @Post('/create')
    async createConnection(
        @Body()
        connection: Connection
    ): Promise<Connection> {
        return this.connectionService.create(connection);
    }

    @Get('/create-fixtures')
    async createFixtures(): Promise<void> {
        const connections = [
            {
                date: '22-06-2023',
                mail: 'test3@test.com',
                success: true
            },
            {
                date: '22-06-2023',
                mail: 'test.test@test.com',
                success: false
            },
            {
                date: '23-06-2023',
                mail: 'test.test@test.com',
                success: false
            },
            {
                date: '24-06-2023',
                mail: 'test.test@test.com',
                success: false
            },
            {
                date: '25-06-2023',
                mail: 'si2@test.com',
                success: true
            }, 
            {
                date: '25-06-2023',
                mail: 'pro.test.fr',
                success: false
            }, 
            {
                date: '25-06-2023',
                mail: 'esgi@esgi.fr',
                success: true
            }, 
            {
                date:'26-06-2023',
                mail: 'sidox@sidox.fr',
                success: false
            },
            {
                date: '28-06-2023',
                mail: 'sid@test.fr',
                success: true
            },
            {
                date: '29-06-2023',
                mail: 'sid@test.fr',
                success: false
            },
            {
                date: '29-06-2023',
                mail: 'sidox@sidox.fr',
                success: true
            },
            {
                date: '30-06-2023',
                mail: 'test@gmail.com',
                success: false
            }
        ];
        connections.forEach(async (connection) => {
            await this.connectionService.create(connection);
        }); 
    }

    @Post('/delete')
    async deleteConnection(
        @Body()
        id: string
    ): Promise<Connection> {
        return this.connectionService.delete(id);
    }

    @Post('/find')
    async findConnection(
        @Body()
        id: string
    ): Promise<Connection> {
        return this.connectionService.findOne(id);
    }

    @Get('/delete-all')
    async deleteAllConnections(): Promise<void> {
        await this.connectionService.deleteAll();
    }
}
