import {PrismaClient} from '@prisma/client';
import {faker} from '@faker-js/faker';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
    dotenv.config();

    console.log('CLEAN DATABASE');
    await prisma.tag.deleteMany();
    await prisma.user.deleteMany();
    console.log('DATABASE CLEANED');

    console.log('SEED USERS');
    await seedUsers();
    console.log('USERS SEEDED');
}

async function seedUsers() {
    for (const user of users) {
        const password = await bcrypt.hash(user.password, 10);

        await prisma.user.create({
            data: {
                ...user,
                password: password
            }
        });
    }
}


export interface User {
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


const users: User[] = [
    {
        username: 'admin',
        email: 'admin@admin.fr',
        password: 'admin',

        companyName: 'admin',
        companyKBIS: 'admin',
        companyURL: 'http://admin',

        isVerified: true,
        roles: ['ROLE_ADMIN']
    },
    {
        username: 'maintainer',
        email: 'maintainer@maintainer.fr',
        password: 'maintainer',

        companyName: 'maintainer',
        companyKBIS: 'maintainer',
        companyURL: 'http://maintainer',

        isVerified: true,
        roles: ['ROLE_MAINTAINER']
    },
    {
        username: 'user',
        email: 'user@user.fr',
        password: 'user',

        companyName: 'user',
        companyKBIS: 'user',
        companyURL: 'http://user',

        isVerified: true,
        roles: []
    }
];

main()
.catch((e) => console.error(e))
.finally(async () => {
    await prisma.$disconnect();
});