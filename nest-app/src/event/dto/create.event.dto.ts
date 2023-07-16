export class CreateEventDto {
    uuid: string;
    date: Date;
    data: Record<string, any>;
    type: string;
    devideData: Record<string, any>;
    
    appID?: string;
    appSecret?: string;
    userId?: number;
}