import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { PrismaService } from 'src/prisma.service';
import { Sample } from '@prisma/client';
import { error } from 'console';
import { NotFoundError, sample } from 'rxjs';

@Injectable()
export class SampleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSampleDto: CreateSampleDto): Promise<Sample | Error> {
    try {
      var sample = await this.prisma.sample.create({
        data: createSampleDto
      })

      return sample;
    }
    catch(error){
      console.error(error);
      throw new InternalServerErrorException("Error in process")
    }

  }

  async findAll(): Promise<Sample[] | Error> {
    try {
      return await this.prisma.sample.findMany()
    }
    catch(error) {
      console.error("Error:", error);
      throw new InternalServerErrorException("Error in proccess ")
    }
  }

  async findOne(sampleId: string): Promise<Sample  | Error> {
    try {
      var sample = await this.prisma.sample.findUnique({
        where: {
          id: sampleId
        }
      })

      if(!sample) throw new NotFoundException();

      return sample;
    }
    catch(error) {
      console.error("Error: ", error);
      throw new InternalServerErrorException("Error in proccess");
    }
  }

  async update(sampleId: string, updateSampleDto: UpdateSampleDto): Promise<Sample | Error> {
    if(sampleId != updateSampleDto.id) {
      throw new NotFoundException()
    }

    try {
      var sample = await this.prisma.sample.update({
        where: {
          id: sampleId
        },
        data: updateSampleDto
      })

      return sample
    }
    catch(error) {
      console.error("Error: ", error);
      throw new InternalServerErrorException("Erro in process")
    }
  }

  async remove(sampleId: string): Promise<Sample | Error> {
    try {
      var sampleExist = await this.prisma.sample.findUnique({
        where: {
          id: sampleId
        }
      })

      if(!sampleExist) throw new NotFoundException();

      return await this.prisma.sample.delete({
        where: {
          id: sampleId
        }
      })
    }
    catch(error) {
      console.log("Error: ", error);
      throw new InternalServerErrorException("Error in process")
    }
  }
}
