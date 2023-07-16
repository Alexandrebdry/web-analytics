import * as mongoose from 'mongoose';

export interface Event extends Document {
    date: Date;
    uuid: string;
    data: any;
    type: string;
    deviceData: {
        userAgent: string;
        screenWidth: number;
        screenHeight: number;
        language: string;
        vendor: string;
        os: string;
        osVersion: string;
        browser: string;
        browserVersion: string;
        cpuArchitecture: string;
        engineName: string;
        engineVersion: string;

    },
    userId: number;
}

export const EventSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    uuid: String,
    data: mongoose.Schema.Types.Mixed,
    type: String,
    deviceData: {
        userAgent: String,
        screenWidth: Number,
        screenHeight: Number,
        language: String,
        vendor: String,
    },
    userId: Number,
});