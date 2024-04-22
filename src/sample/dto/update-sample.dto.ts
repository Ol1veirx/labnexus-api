import { PartialType } from '@nestjs/mapped-types';
import { CreateSampleDto } from './create-sample.dto';

export class UpdateSampleDto extends PartialType(CreateSampleDto) {
    id: string;
    identifier: string;
    description: string;
    location: string;
    statusSample: string;
}
