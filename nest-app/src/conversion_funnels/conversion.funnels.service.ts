import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { ConversionFunnelsDto } from './conversion.funnels.dto';
import { Tag, TagsService } from 'src/tags/tags.service';

export type ConversionFunnel = {
    id?: number;
    comment: string;
    companyName: string;
    tags?: Tag[];
    deleted?: boolean;
};

@Injectable()
export class ConversionFunnelsService {
  constructor(
    private prisma: PrismaService,
    private tagsService: TagsService
  ) {}

  async create(conversionFunnelDto: ConversionFunnelsDto): Promise<ConversionFunnel> {
    conversionFunnelDto.id = undefined;

    // find tags
    const tags = await this.findTags(conversionFunnelDto.tags, conversionFunnelDto.companyName);

    if (tags.length == 0) {
      throw new Error('No tags found');
    }

    // create conversion funnel
    const newConversionFunnel = await this.prisma.conversionFunnel.create({
        data: {
            comment: conversionFunnelDto.comment,
            companyName: conversionFunnelDto.companyName
        }
    }) as ConversionFunnel;
    newConversionFunnel.tags = tags;

    // link tags to conversion funnel
    await this.createLinkWithTag(newConversionFunnel, tags);

    return newConversionFunnel;
  }

  async update(conversionFunnelDto: ConversionFunnelsDto, companyName: string): Promise<ConversionFunnel> {
    return await this.prisma.conversionFunnel.update({
        where: {
            id: conversionFunnelDto.id,
            companyName: companyName
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
  
  async find(id: number, companyName: string): Promise<ConversionFunnel> {
    const conversionFunnel = await this.prisma.conversionFunnel.findUnique({
        where: {
            id: id,
            companyName: companyName
        }
    }) as ConversionFunnel;

    if (!conversionFunnel) {
      return null;
    }

    const tags = await this.getTags(conversionFunnel);
    console.log(tags);

    return conversionFunnel;
  }

  async findCompany(companyName: string): Promise<ConversionFunnel[]> {
    const conversionFunnels = await this.prisma.conversionFunnel.findMany({
        where: {
            companyName: companyName,
            deleted: false
        }
    }) as ConversionFunnel[];

    for (const conversionFunnel of conversionFunnels) {
      conversionFunnel.tags = await this.getTags(conversionFunnel) as Tag[];
    }

    return conversionFunnels;
  }












  // private methods
  private async findTags(tagIds: string[], companyName: string): Promise<Tag[]> {
    const tags = [];
    for (const tagId of tagIds) {
      const tag = await this.tagsService.find(parseInt(tagId), companyName);
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