import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
    title: string;
    description: string;
    objective: string;
    scope: string;
    cronograma: string;
    statusProject: string;
}
