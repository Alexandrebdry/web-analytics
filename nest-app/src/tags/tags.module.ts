import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { PrismaService } from 'nestjs-prisma';
import { TagsController } from './tags.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule
  ],
  providers: [TagsService, PrismaService],
  controllers: [TagsController],
  exports: [TagsService],
})
export class TagsModule {}
