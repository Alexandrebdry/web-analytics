import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { UsersModule } from 'src/users/users.module';
import { CredentialsModule } from 'src/credentials/credentials.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schemas/event.schemas';

@Module({
  imports: [
    UsersModule,
    CredentialsModule,
    MongooseModule.forFeature([
      { name: 'Event', schema: EventSchema }
    ])
  ],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
