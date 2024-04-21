import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService){}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    var project = await this.prisma.project.create({
      data: {
        title: createProjectDto.title,
        description: createProjectDto.description,
        objective: createProjectDto.objective,
        scope: createProjectDto.scope,
        cronograma: createProjectDto.cronograma,
        statusProject: createProjectDto.statusProject,
        userId: createProjectDto.userId
      }
    })
    return project;
  }

  async findAll(): Promise<Project[]> {
    var projects = await this.prisma.project.findMany();

    return projects;
  }

  async findOne(projectId: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId
      }
    })
    if(!project) throw new NotFoundException();
    return project;
  }

  async update(projectId: string, updateProjectDto: UpdateProjectDto) {
      var project = await this.prisma.project.findUnique({
        where: {
          id: projectId
        }
      })

      if(!project) throw new NotFoundException();
      
      return await this.prisma.project.update({
        where: {
          id: projectId
        },
        data: updateProjectDto
      })
  }

  async remove(projectId: string) {
    var projectExist = await this.prisma.project.findUnique({
      where: {
        id: projectId
      }
    })

    if(!projectExist) throw new NotFoundException();

    return await this.prisma.project.delete({
      where: {
        id: projectId
      }
    })
  }
}
