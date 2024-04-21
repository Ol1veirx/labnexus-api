import { PartialType } from '@nestjs/mapped-types';
import { CreateExperimentalDatumDto } from './create-experimental-datum.dto';

export class UpdateExperimentalDatumDto extends PartialType(CreateExperimentalDatumDto) {}
