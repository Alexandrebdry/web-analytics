import { Module } from '@nestjs/common';
import { CredentialsController } from './credentials.controller';
import { CredentialsService } from './credentials.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [UsersModule],
  controllers: [CredentialsController],
  providers: [CredentialsService, PrismaService],
  exports: [CredentialsService],
})
export class CredentialsModule {}
