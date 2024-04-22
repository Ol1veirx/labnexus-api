import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { SampleService } from './sample.service';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { ApiTags } from '@nestjs/swagger';
import { Sample } from '@prisma/client';

@ApiTags("Sample")
@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Post()
  async create(@Body() createSampleDto: CreateSampleDto) {
    try {
      return await this.sampleService.create(createSampleDto);
    }
    catch(error) {
      console.log("Error: ", error);
      throw new InternalServerErrorException()
    }
  }

  @Get()
  async findAll() {
    try{
      var samples = await this.sampleService.findAll();
      return {success: true, data: samples}
    }
    catch(error) {
      console.error("Error: ", error);
      throw new InternalServerErrorException()
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const sample = await this.sampleService.findOne(id);
      return { success: true, data: sample }
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSampleDto: UpdateSampleDto) {
    try {
      const updateSample = await this.sampleService.update(id, updateSampleDto);
      return { success: true, data: updateSample }
    }
    catch (error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      const removeSample = await this.sampleService.remove(id);
      return { success: true, data: removeSample }
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }
}
