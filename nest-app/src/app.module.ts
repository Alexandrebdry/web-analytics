import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TagsModule } from './tags/tags.module';
import { ConversionFunnelsModule } from './conversion_funnels/conversion.funnels.module';
import { SessionModule } from './session/session.module';
import { ConnectionModule } from './connection/connection.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MetricsController } from './metrics/metrics.controller';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
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
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule, 
    UsersModule,
    RolesModule,
    TagsModule,
    ConversionFunnelsModule,
    SessionModule,
    ConnectionModule,
    MetricsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
