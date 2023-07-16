import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from 'nestjs-prisma';
import {CreateConversionFunnelsDto} from './dto/create-conversion.funnels.dto';
import {Tag, TagsService} from 'src/tags/tags.service';
import {User} from "@prisma/client";
import {UpdateConversionFunnelsDto} from "./dto/update-conversion.funnels.dto";

export type ConversionFunnel = {
    id?: number;
    comment: string;
    tags?: Tag[];
    deleted?: boolean;
    userId: number
};

@Injectable()
export class ConversionFunnelsService {
    constructor(
        private prisma: PrismaService,
        private tagsService: TagsService
    ) {
    }

    async create(userId: number, conversionFunnelDto: CreateConversionFunnelsDto): Promise<ConversionFunnel> {
        // find tags
        const tags = await this.findTags(conversionFunnelDto.tags);
    
        if (tags.length == 0) {
            throw new Error('No tags found');
        }
    
        // create conversion funnel
        const newConversionFunnel = await this.prisma.conversionFunnel.create({
            data: {
                comment: conversionFunnelDto.comment,
                user: {
                    connect: {
                        id: userId
                    }
                },
            }
        }) as ConversionFunnel;
        newConversionFunnel.tags = tags;
    
        // link tags to conversion funnel
        await this.createLinkWithTag(newConversionFunnel, tags);
    
        return newConversionFunnel;
    }

    async update(id: number, conversionFunnelDto: UpdateConversionFunnelsDto): Promise<ConversionFunnel> {
        return await this.prisma.conversionFunnel.update({
            where: {
                id: id
            },
            data: {
                comment: conversionFunnelDto.comment,
            }
        });
    }

    async delete(id: number): Promise<ConversionFunnel> {
        const conversionFunnel = await this.prisma.conversionFunnel.findUnique({
            where: {
                id: id,
                deleted: false
            }
        });

        if (!conversionFunnel) {
            throw new NotFoundException(`Conversion Funnel with id ${id} not found`);
        }

        return this.prisma.conversionFunnel.update({
            where: {
                id: id
            },
            data: {
                deleted: true
            }
        });
    }

    async find(id: number): Promise<ConversionFunnel> {
        const conversionFunnel = await this.prisma.conversionFunnel.findUnique({
            where: {
                id: id,
            },
        }) as ConversionFunnel;

        if (!conversionFunnel) {
            throw new NotFoundException(`Conversion Funnel with id ${id} not found`);
        }

        const tags = await this.getTags(conversionFunnel);

        conversionFunnel.tags = tags;

        return conversionFunnel;
    }

    async findAll(user: User): Promise<ConversionFunnel[]> {
        if (user.roles.includes('ROLE_ADMIN')) {
            const conversionFunnels = await this.prisma.conversionFunnel.findMany({
                where: {
                    deleted: false
                },
            }) as ConversionFunnel[];

            for (const conversionFunnel of conversionFunnels) {
                conversionFunnel.tags = await this.getTags(conversionFunnel) as Tag[];
            }

            return conversionFunnels;
        }
        else {
            const conversionFunnels = await this.prisma.conversionFunnel.findMany({
                where: {
                    user: {
                        id: user.id
                    },
                    deleted: false
                },
            }) as ConversionFunnel[];

            for (const conversionFunnel of conversionFunnels) {
                conversionFunnel.tags = await this.getTags(conversionFunnel) as Tag[];
            }

            return conversionFunnels;
        }
    }


    // private methods
    private async findTags(tagIds: string[]): Promise<Tag[]> {
        const tags = [];
        for (const tagId of tagIds) {
            const tag = await this.tagsService.find(parseInt(tagId));
            if (tag) {
                tags.push(tag);
            }
        }
        return tags;
    }

    private async createLinkWithTag(conversionFunnel: ConversionFunnel, tags: Tag[]) {
        await this.prisma.conversionFunnelTag.deleteMany({
            where: {
                conversionFunnelId: conversionFunnel.id
            }
        });

        const conversionFunnelTags = [];
        for (const tag of tags) {
            const conversionFunnelTag = await this.prisma.conversionFunnelTag.create({
                data: {
                tag: {
                    connect: {
                    id: tag.id
                    }
                },
                conversionFunnel: {
                    connect: {
                    id: conversionFunnel.id
                    }
                }
                }
            });
            conversionFunnelTags.push(conversionFunnelTag);
        }

        return conversionFunnelTags;
    }

    private async getTags(conversionFunnel: ConversionFunnel): Promise<Tag[]> {
        const conversionFunnelTags = await this.prisma.conversionFunnelTag.findMany({
            where: {
                conversionFunnelId: conversionFunnel.id
            },
            include: {
                tag: true
            }
        });

        const tags = [];
        for (const conversionFunnelTag of conversionFunnelTags) {
            tags.push(conversionFunnelTag.tag);
        }

        return tags;
    }
}