import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from 'nestjs-prisma';
import {ConversionFunnelsDto} from './conversion.funnels.dto';
import {Tag} from 'src/tags/tags.service';
import {User} from "@prisma/client";

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
  ) {}

  async create(userId :number, conversionFunnelDto: ConversionFunnelsDto): Promise<ConversionFunnel> {

    if (conversionFunnelDto.tags.length == 0) {
      throw new Error('No tags found');
    }

      return await this.prisma.conversionFunnel.create({
        data: {
            comment: conversionFunnelDto.comment,
            user: {
                connect: {
                    id: userId
                }
            },
            tags: {
                connect: conversionFunnelDto.tags.map(tag => {
                    return {
                        id: +tag
                    }
                })
            }
        }
    }) as ConversionFunnel;
  }

  async update(conversionFunnelDto: ConversionFunnelsDto): Promise<ConversionFunnel> {
    return await this.prisma.conversionFunnel.update({
        where: {
            id: conversionFunnelDto.id,
        },
        data: {
            comment: conversionFunnelDto.comment,
        }
    });
  }

  async delete(id: number): Promise<ConversionFunnel> {
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
        include: {
            tags: true
        }
    }) as unknown as ConversionFunnel;

    if (!conversionFunnel) {
        throw new NotFoundException(`Conversion Funnel with id ${id} not found`);
    }

    return conversionFunnel;
  }

  async findAll(user:User): Promise<ConversionFunnel[]> {
    const conversionFunnels = await this.prisma.conversionFunnel.findMany({
        where: {
            user: {
                id: user.id
            },
            deleted: false
        },
        include: {
            tags: true
        }
    }) as unknown as ConversionFunnel[];

    return conversionFunnels;
  }
}