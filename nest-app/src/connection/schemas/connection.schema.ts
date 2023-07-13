import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConnectionDocument = HydratedDocument<Connection>;

@Schema()
export class Connection {
    @Prop()
    date: string;

    @Prop()
    mail: string;

    @Prop()
    success: boolean;

    @Prop()
    userId: string;
}

export const ConnectionSchema = SchemaFactory.createForClass(Connection);