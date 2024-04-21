import { Injectable } from '@nestjs/common';
import { CreateExperimentalDatumDto } from './dto/create-experimental-datum.dto';
import { UpdateExperimentalDatumDto } from './dto/update-experimental-datum.dto';

@Injectable()
export class ExperimentalDataService {
  create(createExperimentalDatumDto: CreateExperimentalDatumDto) {
    return 'This action adds a new experimentalDatum';
  }

  findAll() {
    return `This action returns all experimentalData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experimentalDatum`;
  }

  update(id: number, updateExperimentalDatumDto: UpdateExperimentalDatumDto) {
    return `This action updates a #${id} experimentalDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} experimentalDatum`;
  }
}
