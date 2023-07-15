import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type MetricsDocument = Metrics & Document;

@Schema()
export class Metrics {
  @Prop({ required: true })
  uuid: string;

  @Prop({ required: true })
  appID: string;

  @Prop({ required: true })
  appSecret: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop({ type: MongooseSchema.Types.Mixed })
  data: any;

  @Prop({ required: true })
  type: string;
}

export const MetricsSchema = SchemaFactory.createForClass(Metrics);
