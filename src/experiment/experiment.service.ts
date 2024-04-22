import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateExperimentDto } from './dto/create-experiment.dto';
import { UpdateExperimentDto } from './dto/update-experiment.dto';
import { PrismaService } from 'src/prisma.service';
import { Experiment, Prisma } from '@prisma/client';
import { connect } from 'http2';
import { ExpressAdapter } from '@nestjs/platform-express';

@Injectable()
export class ExperimentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExperimentDto: CreateExperimentDto): Promise<Experiment | Error>  {
    try {
      var experiment = await this.prisma.experiment.create({
        data: createExperimentDto
      })

      return experiment;
    }
    catch(error) {
      console.error("Error: ", error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Experiment[] | Error> {
    try {
      var experiments = await this.prisma.experiment.findMany()

      return experiments;
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async findOne(experimentId: string): Promise<Experiment | Error> {
    try {
      var experiment = await this.prisma.experiment.findUnique({
        where: {
          id: experimentId
        }
      })

      if(!experiment) throw new NotFoundException();

      return experiment
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async update(experimentId: string, updateExperimentDto: UpdateExperimentDto): Promise<Experiment | Error> {
    if(experimentId != updateExperimentDto.id){
      throw new NotFoundException()
    }

    try {
      var experiment = await this.prisma.experiment.update({
        where: {
          id: experimentId
        },
        data: updateExperimentDto
      })

      return experiment
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async remove(experimentId: string): Promise<Experiment | Error> {
    try {
      const result = await this.prisma.experiment.delete({
        where: {
          id: experimentId
        }
      })

      return result
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }
}
