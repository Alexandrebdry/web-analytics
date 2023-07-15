export class ConversionFunnelsDto {
    id?: number;
    comment: string;
    tags?: string[];

    constructor() {
        this.id = undefined;
        this.comment = '';
        this.tags = [];
    }
}