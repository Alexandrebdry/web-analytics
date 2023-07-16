export class CreateTagDto {
    id: number;
    comment: string;

    constructor() {
        this.id = undefined;
        this.comment = '';
    }
}