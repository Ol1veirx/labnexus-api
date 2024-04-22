import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
    id: string;
    name: string;
    office: string;
    occupationArea: string;
    email: string;
    phone: string;
    projectId: string;
}
