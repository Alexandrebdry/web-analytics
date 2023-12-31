import {PrismaClient} from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import {faker} from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
    dotenv.config();

    await prisma.conversionFunnelTag.deleteMany();
    await prisma.conversionFunnel.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.credentials.deleteMany();
    await prisma.report.deleteMany();
    await prisma.user.deleteMany();

    console.log('DATABASE CLEANED');
    console.log('==============');

    await seedUsers();
    console.log('USERS SEEDED');
    console.log('==============');

    await seedCredentials();
    console.log('CREDENTIALS SEEDED');
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

    await seedReports();
    console.log('REPORTS SEEDED');
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

        const newUser = await prisma.user.create({
            data: {
                ...user,
                password: password
            }
        });

        user.id = newUser.id;
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
        roles: ['ROLE_USER']
    }
];

/* ====================
CREDENTIALS
==================== */

async function seedCredentials() {
    for (const user of users) {
        const newCredentials = await prisma.credentials.create({
            data: {
                appID: uuidv4(),
                appSecret: uuidv4(),
                userId: user.id
            }
        });

        if (user.username === 'user') {
            console.log('USER TEST CREDENTIALS');
            console.log({
                email: user.email,
                password: 'user',
                appID: newCredentials.appID,
                appSecret: newCredentials.appSecret
            });
            console.log('==============');
        }
    }
}

/* ====================
TAGS
==================== */

async function seedTags() {
    const users = await prisma.user.findMany();

    for (let i = 0; i < 30; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        await prisma.tag.create({
            data: {
                comment: 'Tag-' + i,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
    }
}

/* ====================
REPORTS
==================== */

enum DataType {
    absolu = 'absolu',
    taux = 'taux',
}

enum VisualizationType {
    KPI = 'KPI',
    Graphe = 'Graphe',
    Heatmap = 'Heatmap',
}

const todayDate = new Date();
const startDate = new Date(todayDate);
startDate.setMonth(startDate.getMonth() - 1);

const endDate = new Date(todayDate);
endDate.setMonth(endDate.getMonth() + 1);

const reports: Report[] = [
    {
        "filters": [
            {
                "type": "mouse"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "absolu" as DataType,
        "visualizationType": "Heatmap" as VisualizationType
    },
    {
        "filters": [
            {
                "type": "pageVisited"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "absolu" as DataType,
        "visualizationType": "KPI" as VisualizationType
    },
    {
        "filters": [
            {
                "type": "connexion"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "absolu" as DataType,
        "visualizationType": "KPI" as VisualizationType
    },
    {
        "filters": [
            {
                "type": "session"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "absolu" as DataType,
        "visualizationType": "KPI" as VisualizationType
    },
    {
        "filters": [
            {
                "type": "pageVisited"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "taux" as DataType,
        "visualizationType": "Graphe" as VisualizationType
    },
    {
        "filters": [
            {
                "type": "pageVisited"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "absolu" as DataType,
        "visualizationType": "Graphe" as VisualizationType
    },
    {
        "filters": [
            {
                "type": "click"
            }
        ],
        "timeScaleStart": startDate,
        "timeScaleEnd": endDate,
        "timeScaleStep": 600,
        "dataType": "taux" as DataType,
        "visualizationType": "Graphe" as VisualizationType
    }
];

interface Report {
    id?: number;
    filters: any;
    timeScaleStart: Date;
    timeScaleEnd: Date;
    timeScaleStep: number;
    dataType: DataType;
    visualizationType: VisualizationType;
}

async function seedReports() {
    const users = await prisma.user.findMany();

    for (const user of users) {
        for (const report of reports) {
            await prisma.report.create({
                data: {
                    filters: report.filters,
                    timeScaleStart: report.timeScaleStart,
                    timeScaleEnd: report.timeScaleEnd,
                    timeScaleStep: report.timeScaleStep,
                    dataType: report.dataType,
                    visualizationType: report.visualizationType,
                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            });
        }
    };

    /*
    const filters = ['mouse', 'click', 'session', 'pageVisited', 'connexion'];
    const users = await prisma.user.findMany();
    for (let i = 0; i < 5; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        await prisma.report.create({
            data: {
                filters: [
                    {
                        "type": filters[Math.floor(Math.random() * filters.length)],
                    }
                ],
                timeScaleStart: faker.date.past(),
                timeScaleEnd: faker.date.recent(),
                timeScaleStep: 1,
                dataType: DataType.absolu,
                visualizationType: VisualizationType.KPI,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
    }
    for (let i = 0; i < 5; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        await prisma.report.create({
            data: {
                filters: [
                    {
                        "type": filters[Math.floor(Math.random() * filters.length)],
                    }
                ],
                timeScaleStart: new Date(),
                timeScaleEnd: new Date(),
                timeScaleStep: 1,
                dataType: DataType.absolu,
                visualizationType: VisualizationType.Heatmap,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
    }
    for (let i = 0; i < 5; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        await prisma.report.create({
            data: {
                filters: [
                    {
                        "type": filters[Math.floor(Math.random() * filters.length)],
                    }
                ],
                timeScaleStart: new Date(),
                timeScaleEnd: new Date(),
                timeScaleStep: 1,
                dataType: DataType.taux,
                visualizationType: VisualizationType.Graphe,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
    }
    */
}

/* ====================
CONVERSION FUNNELS
==================== */

async function seedConversionFunnels() {
    const users = await prisma.user.findMany();
    for (let i = 0; i < 10; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        await prisma.conversionFunnel.create({
            data: {
                comment: 'Tunnel-' + i,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
    }
}

/* ====================
CONVERSION FUNNELS TAGS
==================== */

async function seedConversionFunnelsTags() {
    const savedConversionFunnels = await prisma.conversionFunnel.findMany();
    const savedTags = await prisma.tag.findMany();
    for (const conversionFunnel of savedConversionFunnels) {
        const randomTags = [];
        for (let i = 0; i < 3; i++) {
            const randomTag = savedTags[Math.floor(Math.random() * savedTags.length)];
            if (!randomTags.includes(randomTag)) {
                randomTags.push(randomTag);
            }
        }

        for (const tag of randomTags) {
            await prisma.conversionFunnelTag.create({
                data: {
                    conversionFunnelId: conversionFunnel.id,
                    tagId: tag.id
                }
            });
        }
    }
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });