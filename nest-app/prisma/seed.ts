import {PrismaClient} from '@prisma/client';
import {faker} from '@faker-js/faker';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
    dotenv.config();

    await prisma.tag.deleteMany();
    await prisma.user.deleteMany();
    console.log('DATABASE CLEANED');

    console.log('==============');

    await seedUsers();
    console.log('USERS SEEDED');

    console.log('==============');

    await seedTags();
    console.log('TAGS SEEDED');

    console.log('==============');


    console.log('SEED DONE');
}

const companies = [
    'ADM_COMP',
    'MTN_COMP',
    'USR_COMP',
];

/* ====================
USERS
==================== */

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


interface User {
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

        companyName: companies[0],
        companyKBIS: companies[0] + '-1234567',
        companyURL: 'http://' + companies[0],

        isVerified: true,
        roles: ['ROLE_ADMIN']
    },
    {
        username: 'maintainer',
        email: 'maintainer@maintainer.fr',
        password: 'maintainer',

        companyName: companies[1],
        companyKBIS: companies[1] + '-1234567',
        companyURL: 'http://' + companies[1],

        isVerified: true,
        roles: ['ROLE_MAINTAINER']
    },
    {
        username: 'user',
        email: 'user@user.fr',
        password: 'user',

        companyName: companies[2],
        companyKBIS: companies[2] + '-1234567',
        companyURL: 'http://' + companies[2],

        isVerified: true,
        roles: []
    }
];

/* ====================
TAGS
==================== */

interface Tag {
    id?: number;
    comment: string;
    companyName: string;
};

async function seedTags() {
    for (const tag of tags) {
        await prisma.tag.create({
            data: {
                ...tag
            }
        });
    }
}

const tags: Tag[] = [
    {
        comment: 'Tag Admin - 1',
        companyName: companies[0]
    },
    {
        comment: 'Tag Admin - 2',
        companyName: companies[0]
    },
    {
        comment: 'Tag Admin - 3',
        companyName: companies[0]
    },
    {
        comment: 'Tag Admin - 4',
        companyName: companies[0]
    },
    {
        comment: 'Tag Admin - 5',
        companyName: companies[0]
    },
    {
        comment: 'Tag Maintainer - 1',
        companyName: companies[1]
    },
    {
        comment: 'Tag Maintainer - 2',
        companyName: companies[1]
    },
    {
        comment: 'Tag Maintainer - 3',
        companyName: companies[1]
    },
    {
        comment: 'Tag User - 1',
        companyName: companies[2]
    },
    {
        comment: 'Tag User - 2',
        companyName: companies[2]
    },
];

main()
.catch((e) => console.error(e))
.finally(async () => {
    await prisma.$disconnect();
});