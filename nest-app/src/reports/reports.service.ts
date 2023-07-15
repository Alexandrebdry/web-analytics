import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateReportDto} from './dto/create-report.dto';
import {UpdateReportDto} from './dto/update-report.dto';
import { PrismaService } from 'nestjs-prisma';
import {User} from "@prisma/client";

@Injectable()
export class ReportsService {
  constructor(
      private prisma: PrismaService
  ) {}

    async create(userId: number, createReportDto: CreateReportDto) {
        const report = await this.prisma.report.create({
            data: {
                ...createReportDto,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
        return report;
    }

    async findAll(user:User) {
        if (user.roles.includes('ROLE_ADMIN')) {
            return this.prisma.report.findMany();
        }
        else {
            return this.prisma.report.findMany({
                where: {
                    user: {
                        id: user.id
                    }
                }
            });
        }
    }

    async findOne(id: number) {
        const report = await this.prisma.report.findUnique({
            where: {id},
        });
        if (!report) {
            throw new NotFoundException(`Report with id ${id} not found`);
        }
        return report;
    }

    async update(id: number, updateReportDto: UpdateReportDto) {
        const report = await this.prisma.report.findUnique({
            where: {id},
        });
        if (!report) {
            throw new NotFoundException(`Report with id ${id} not found`);
        }
        return this.prisma.report.update({
            where: {id},
            data: updateReportDto,
        });
    }

    async remove(id: number) {
        const report = await this.prisma.report.findUnique({
            where: {id},
        });
        if (!report) {
            throw new NotFoundException(`Report with id ${id} not found`);
        }
        return this.prisma.report.delete({
            where: {id},
        });
    }
}