import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateExperimentalDataDto } from './dto/create-experimental-data.dto';
import { UpdateExperimentalDataDto } from './dto/update-experimental-data.dto';
import { PrismaService } from 'src/prisma.service';
import { ExperimentalData } from '@prisma/client';

@Injectable()
export class ExperimentalDataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExperimentalDataDto: CreateExperimentalDataDto): Promise<ExperimentalData | Error> {
    try {
      const experimentalData = await this.prisma.experimentalData.create({
        data: createExperimentalDataDto
      })

      return experimentalData
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async findAll(): Promise<ExperimentalData[] | Error> {
    try {
      var experimentalsData = await this.prisma.experimentalData.findMany()
      return experimentalsData
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async findOne(experimentalDataId: string): Promise<ExperimentalData | Error> {
    try {
      const experimentalData = await this.prisma.experimentalData.findUnique({
        where: {
          id: experimentalDataId
        }
      })

      if(!experimentalData) throw new NotFoundException()

      return experimentalData;
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async update(experimentalDataId: string, updateExperimentalDataDto: UpdateExperimentalDataDto): Promise<ExperimentalData | Error> {
    if(experimentalDataId != updateExperimentalDataDto.id){
      throw new NotFoundException()
    }

    try {
      var experimentalData = await this.prisma.experimentalData.update({
        where: {
          id: experimentalDataId
        },
        data: updateExperimentalDataDto
      })

      return experimentalData
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async remove(experimentalDataId: string): Promise<ExperimentalData | Error> {
    try {
      const result = await this.prisma.experimentalData.delete({
        where: {
          id: experimentalDataId
        }
      })

      if(!result) throw new NotFoundException();

      return result
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }
}
