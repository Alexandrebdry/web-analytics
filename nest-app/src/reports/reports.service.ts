import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateReportDto} from './dto/create-report.dto';
import {UpdateReportDto} from './dto/update-report.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReportsService {
  constructor(
      private prisma: PrismaService
  ) {}

    async create(createReportDto: CreateReportDto) {
        const report = await this.prisma.report.create({
            data: createReportDto,
        });
        return report;
    }

    async findAll() {
        const reports = await this.prisma.report.findMany();
        return reports;
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