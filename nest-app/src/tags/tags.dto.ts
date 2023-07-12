export class TagsDto {
    id?: number;
    comment: string;
    companyName?: string;

    constructor() {
        this.id = undefined;
        this.comment = '';
        this.companyName = '';
    }
}