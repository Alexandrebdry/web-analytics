import {PrismaClient} from '@prisma/client';
import {faker} from '@faker-js/faker';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
    dotenv.config();

    await prisma.conversionFunnelTag.deleteMany();
    await prisma.conversionFunnel.deleteMany();
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

    await seedConversionFunnels();
    console.log('CONVERSION FUNNELS SEEDED');
    console.log('==============');

    await seedConversionFunnelsTags();
    console.log('CONVERSION FUNNELS TAGS SEEDED');
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
const savedTags: Tag[] = [];


async function seedTags() {
    for (const tag of tags) {
        const newTag = await prisma.tag.create({
            data: {
                ...tag
            }
        });
        savedTags.push(newTag);
    }
}

/* ====================
CONVERSION FUNNELS
==================== */

interface ConversionFunnel {
    id?: number;
    comment: string;
    companyName: string;
    tags?: any[];
    deleted?: boolean;
};

const conversionFunnels: ConversionFunnel[] = [
    {
        comment: 'Conversion Funnel Admin - 1',
        companyName: companies[0]
    },
    {
        comment: 'Conversion Funnel Admin - 2',
        companyName: companies[0]
    },
    {
        comment: 'Conversion Funnel Admin - 3',
        companyName: companies[0]
    },
    {
        comment: 'Conversion Funnel Maintainer - 1',
        companyName: companies[1]
    },
    {
        comment: 'Conversion Funnel Maintainer - 2',
        companyName: companies[1]
    },
    {
        comment: 'Conversion Funnel User - 1',
        companyName: companies[2]
    },
    {
        comment: 'Conversion Funnel User - 2',
        companyName: companies[2]
    },
    {
        comment: 'Conversion Funnel User - 3',
        companyName: companies[2]
    },
];

const savedConversionFunnels: ConversionFunnel[] = [];

async function seedConversionFunnels() {
    for (const conversionFunnel of conversionFunnels) {
        const newConversionFunnel = await prisma.conversionFunnel.create({
            data: {
                comment: conversionFunnel.comment,
                companyName: conversionFunnel.companyName
            }
        });
        savedConversionFunnels.push(newConversionFunnel);
    }
}

/* ====================
CONVERSION FUNNELS TAGS
==================== */

interface ConversionFunnelTag {
    id?: number;
    conversionFunnelId: number;
    tagId: number;
};

const savedConversionFunnelTags: ConversionFunnelTag[] = [];

async function seedConversionFunnelsTags() {
    for (const conversionFunnel of savedConversionFunnels) {
        const randomTags = [];
        for (let i = 0; i < 3; i++) {
            const randomTag = savedTags[Math.floor(Math.random() * savedTags.length)];
            if (!randomTags.includes(randomTag)) {
                randomTags.push(randomTag);
            }
        }

        for (const tag of randomTags) {
            const newConversionFunnelTag = await prisma.conversionFunnelTag.create({
                data: {
                    conversionFunnelId: conversionFunnel.id,
                    tagId: tag.id
                }
            });

            savedConversionFunnelTags.push(newConversionFunnelTag);
        }
    }
}

main()
.catch((e) => console.error(e))
.finally(async () => {
    await prisma.$disconnect();
});