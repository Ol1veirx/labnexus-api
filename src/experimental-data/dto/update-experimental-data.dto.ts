import { PartialType } from '@nestjs/mapped-types';
import { CreateExperimentalDataDto } from './create-experimental-data.dto';

export class UpdateExperimentalDataDto extends PartialType(CreateExperimentalDataDto) {
    id: string;
    dataUrl: string;
}
