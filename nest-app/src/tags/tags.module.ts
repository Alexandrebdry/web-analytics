import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { PrismaService } from 'nestjs-prisma';
import { TagsController } from './tags.controller';
import { UsersModule } from 'src/users/users.module';
import { CredentialsModule } from 'src/credentials/credentials.module';

@Module({
  imports: [
    UsersModule,
    CredentialsModule,
  ],
  providers: [TagsService, PrismaService],
  controllers: [TagsController],
  exports: [TagsService],
})
export class TagsModule {}
