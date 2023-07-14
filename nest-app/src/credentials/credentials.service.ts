import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/users.service';
import {v4 as uuidv4} from 'uuid';

export type Credentials = {
    id?: number;
    app_id: string;
    app_secret: string;
    userId: number;
    user?: User;
};

@Injectable()
export class CredentialsService {
    constructor(private prisma: PrismaService) {}

    async findByUser(id: number, userId: number) {
        return this.prisma.credentials.findMany({
            where: {
                id: id,
                userId: userId,
            },
        });
    }

    async findAllByUser(userId: number) {
        return this.prisma.credentials.findMany({
            where: {
                userId: userId,
            },
        });
    }

    async create(userId: number) {
        const newCredentials = {
            app_id: uuidv4(),
            app_secret: uuidv4(),
        };

        return await this.prisma.credentials.create({
            data: {
                app_id: newCredentials.app_id,
                app_secret: newCredentials.app_secret,
                userId: userId,
            },
        });
    }

    async delete(id: number, userId: number) {
        return this.prisma.credentials.delete({
            where: {
                id: id,
                userId: userId,
            },
        });
    }
}
