import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SessionDocument = HydratedDocument<Session>;

@Schema()
export class Session {
    @Prop()
    duration: number;

    @Prop()
    mail: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);