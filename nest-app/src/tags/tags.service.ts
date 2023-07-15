import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from 'nestjs-prisma';
import {CreateTagDto} from './dto/create-tag.dto';
import {UpdateTagDto} from "./dto/update-tag.dto";
import {User} from "@prisma/client";

export type Tag = {
    id?: number;
    comment: string;
    deleted?: boolean;
};

@Injectable()
export class TagsService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    async create(userId: number, tagDto: CreateTagDto): Promise<Tag> {
        return this.prisma.tag.create({
            data: {
                comment: tagDto.comment,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
    }

    async update(id: number, updateTagDto: UpdateTagDto): Promise<Tag> {
        const tag = await this.prisma.tag.findUnique({
            where: {id},
        });
        if (!tag) {
            throw new NotFoundException(`Tag with id ${id} not found`);
        }
        return this.prisma.tag.update({
            where: {id},
            data: updateTagDto,
        });
    }

    async delete(id: number): Promise<Tag> {
        const tag = await this.prisma.tag.findUnique({
            where: {id},
        });
        if (!tag) {
            throw new NotFoundException(`Tag with id ${id} not found`);
        }
        return this.prisma.tag.update({
            where: {id},
            data: {
                deleted: true
            }
        });
    }


    async find(id: number): Promise<Tag> {
        return this.prisma.tag.findUnique({
            where: {
                id: id,
                deleted: false
            },
        });
    }

    async findAllByUser(user: User): Promise<Tag[]> {
        if (user.roles.includes('ROLE_ADMIN')) {
            return this.prisma.tag.findMany(
                {
                    where: {
                        deleted: false
                    }
                }
            );
        }
        else {
            return this.prisma.tag.findMany({
                where: {
                    deleted: false,
                    user: {
                        id: user.id
                    }
                }
            });
        }
    }

  async findByComment(comment: string, user: User): Promise<Tag> {
    return this.prisma.tag.findFirst({
        where: {
            comment: comment,
            deleted: false,
            user: {
                id: user.id
            }
        }
    });
  }
}