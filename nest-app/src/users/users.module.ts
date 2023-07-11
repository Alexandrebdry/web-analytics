import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'nestjs-prisma';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
