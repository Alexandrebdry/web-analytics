import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import {PrismaService} from "nestjs-prisma";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [
    UsersModule
  ],
  controllers: [ReportsController],
  providers: [ReportsService, PrismaService],
  exports: [ReportsService]
})
export class ReportsModule {}
