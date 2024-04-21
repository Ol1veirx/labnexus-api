import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password
      },
    })
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany()
    return users;
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    return user;
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if(!user) throw new NotFoundException(`Usuario com id ${userId} não encontrado`);

    return this.prisma.user.update({
      where: {
        id: userId
      },
      data: updateUserDto
    })
  }

  async remove(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      },
    });

    if(!user) throw new NotFoundException(`Usuario com id ${userId} não encontrado`);

    return this.prisma.user.delete({
      where: {
        id: userId
      },
    });
  }
}

