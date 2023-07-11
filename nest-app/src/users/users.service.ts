import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';

export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;

    companyName: string;
    companyKBIS: string;
    companyURL: string;
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
                ...user,
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

  
  async update(user: User): Promise<User> {
    try {
        const updatedUser = await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                ...user
            }
        });

        return {
            ...updatedUser,
            password: undefined
        };
    }
    catch (error) {
        throw new Error(error);
    }
  }

  async updatePassword(user: User, password: string): Promise<User> {
    const cryptedPassword = await bcrypt.hash(password, 10);

    try {
        const updatedUser = await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                password: cryptedPassword
            }
        });

        return {
            ...updatedUser,
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