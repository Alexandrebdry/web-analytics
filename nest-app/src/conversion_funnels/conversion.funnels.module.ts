import { Module } from '@nestjs/common';
import { ConversionFunnelsService } from './conversion.funnels.service';
import { PrismaService } from 'nestjs-prisma';
import { ConversionFunnelsController } from './conversion.funnels.controller'
import { UsersModule } from 'src/users/users.module';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  imports: [
    UsersModule,
    TagsModule,
  ],
  providers: [ConversionFunnelsService, PrismaService],
  controllers: [ConversionFunnelsController],
  exports: [ConversionFunnelsService],
})
export class ConversionFunnelsModule {}
