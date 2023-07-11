import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async create(user: User): Promise<User> {
    return await this.prisma.user.create({
        data: {
            username: user.username,
            email: user.email,
            password: user.password
        }
    });
  }

  async find(id: number): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
        where: {
            id: id
        }
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
        where: {
            email: email
        }
    });
  }
}