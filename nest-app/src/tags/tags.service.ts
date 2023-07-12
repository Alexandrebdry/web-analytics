import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { TagsDto } from './tags.dto';

export type Tag = {
    id?: number;
    comment: string;
    companyName: string;
    deleted?: boolean;
};

@Injectable()
export class TagsService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(tagDto: TagsDto): Promise<Tag> {
    tagDto.id = undefined;

    return this.prisma.tag.create({
        data: {
            comment: tagDto.comment,
            companyName: tagDto.companyName
        }
    });
  }

  async update(tagDto: TagsDto, companyName: string): Promise<Tag> {
    return this.prisma.tag.update({
        where: {
            id: tagDto.id,
            companyName: companyName
        },
        data: {
            comment: tagDto.comment,
        }
    });
  }

  async delete(id: number): Promise<Tag> {
    return this.prisma.tag.update({
        where: {
            id: id
        },
        data: {
            deleted: true
        }
    });
  }


  async find(id: number): Promise<Tag> {
    return this.prisma.tag.findUnique({
        where: {
            id: id
        }
    });
  }

  async findCompany(companyName: string): Promise<Tag[]> {
      return this.prisma.tag.findMany({
        where: {
            companyName: companyName,
            deleted: false
        }
    });
  }
}