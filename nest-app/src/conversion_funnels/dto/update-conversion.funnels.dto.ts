import {PartialType} from '@nestjs/mapped-types';
import {CreateConversionFunnelsDto} from "./create-conversion.funnels.dto";

export class UpdateConversionFunnelsDto extends PartialType(CreateConversionFunnelsDto) {

}