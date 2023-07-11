import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';

export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const password = user.password;
    const cryptedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await this.prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: cryptedPassword
            }
        });

        return {
            ...newUser,
            password: undefined
        };
    } catch (error) {
        throw new Error(error);
    }
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