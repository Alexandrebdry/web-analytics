import {IsEnum, IsInt, IsISO8601, IsNotEmpty, IsObject, Min} from 'class-validator';
import {Type} from "class-transformer";

enum DataType {
    absolu = 'absolu',
    taux = 'taux',
}

enum VisualizationType {
    KPI = 'KPI',
    Graphe = 'Graphe',
    Heatmap = 'Heatmap',
}

export class CreateReportDto {
    @IsNotEmpty()
    @IsObject()
    @Type(() => Object)
    filters: any;

    @IsNotEmpty()
    @IsISO8601()
    timeScaleStart: Date;

    @IsNotEmpty()
    @IsISO8601()
    timeScaleEnd: Date;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    timeScaleStep: number;

    @IsNotEmpty()
    @IsEnum(DataType)
    dataType: DataType;

    @IsNotEmpty()
    @IsEnum(VisualizationType)
    visualizationType: VisualizationType;
}