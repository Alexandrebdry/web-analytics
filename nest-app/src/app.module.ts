import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_TRANSPORT,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
        ignoreTLS: true,
      },
    }),
    AuthModule, 
    UsersModule,
    RolesModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
