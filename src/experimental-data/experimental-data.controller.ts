import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperimentalDataService } from './experimental-data.service';
import { CreateExperimentalDataDto } from './dto/create-experimental-data.dto';
import { UpdateExperimentalDataDto } from './dto/update-experimental-data.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Experimental Data")
@Controller('experimental-data')
export class ExperimentalDataController {
  constructor(private readonly experimentalDataService: ExperimentalDataService) {}

  @Post()
  create(@Body() createExperimentalDataDto: CreateExperimentalDataDto) {
    return this.experimentalDataService.create(createExperimentalDataDto);
  }

  @Get()
  findAll() {
    return this.experimentalDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experimentalDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperimentalDataDto: UpdateExperimentalDataDto) {
    return this.experimentalDataService.update(id, updateExperimentalDataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experimentalDataService.remove(id);
  }
}
