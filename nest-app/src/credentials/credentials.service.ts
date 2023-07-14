import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/users.service';
import {v4 as uuidv4} from 'uuid';

export type Credentials = {
    id?: number;
    appID: string;
    appSecret: string;
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

    async findByCredentials(appID: string, appSecret: string) {
        return this.prisma.credentials.findFirst({
            where: {
                appID: appID,
                appSecret: appSecret,
            },
        });
    }

    async create(userId: number) {
        const newCredentials = {
            appID: uuidv4(),
            appSecret: uuidv4(),
        };

        return await this.prisma.credentials.create({
            data: {
                appID: newCredentials.appID,
                appSecret: newCredentials.appSecret,
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
