import { PartialType } from '@nestjs/mapped-types';
import { CreateExperimentDto } from './create-experiment.dto';

export class UpdateExperimentDto extends PartialType(CreateExperimentDto) {
    id: string;
    title: string;
    description: string;
    experimentalDataId: string;
    result: string;
    additionalAnalysis: string;
}
