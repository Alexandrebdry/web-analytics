import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';

export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;

    companyName: string;
    companyKBIS: string;
    companyURL: string;

    isVerified: boolean;
    roles: string[];
};

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly mailerService: MailerService
  ) {}

  async create(user: User): Promise<User> {
    user.roles = [];
    const password = user.password;
    const cryptedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await this.prisma.user.create({
            data: {
                ...user,
                password: cryptedPassword
            }
        });

        this.mailerService
            .sendMail({
                to: newUser.email, // list of receivers
                from: 'noreply@web_deathliveroo.com', // sender address
                subject: 'Bienvenue, encore un peu de patience !', // Subject line
                text: 'Votre compte est en attente de validation par un administrateur.', // plaintext body
                html: 'Votre compte est en attente de validation par un administrateur.', // HTML body content
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