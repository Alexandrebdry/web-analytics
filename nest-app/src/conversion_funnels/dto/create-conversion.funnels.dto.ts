export class CreateConversionFunnelsDto {
    id?: number;
    comment: string;
    tags?: string[];

    constructor() {
        this.id = undefined;
        this.comment = '';
        this.tags = [];
    }
}