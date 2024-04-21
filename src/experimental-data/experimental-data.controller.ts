import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperimentalDataService } from './experimental-data.service';
import { CreateExperimentalDatumDto } from './dto/create-experimental-datum.dto';
import { UpdateExperimentalDatumDto } from './dto/update-experimental-datum.dto';

@Controller('experimental-data')
export class ExperimentalDataController {
  constructor(private readonly experimentalDataService: ExperimentalDataService) {}

  @Post()
  create(@Body() createExperimentalDatumDto: CreateExperimentalDatumDto) {
    return this.experimentalDataService.create(createExperimentalDatumDto);
  }

  @Get()
  findAll() {
    return this.experimentalDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experimentalDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperimentalDatumDto: UpdateExperimentalDatumDto) {
    return this.experimentalDataService.update(+id, updateExperimentalDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experimentalDataService.remove(+id);
  }
}
