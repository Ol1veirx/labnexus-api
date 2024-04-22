import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma.service';
import { Member } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

 async create(createMemberDto: CreateMemberDto): Promise<Member  | Error> {
    try {
      const member = await this.prisma.member.create({
        data: createMemberDto
      })

      return member;
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async findAll(): Promise<Member[]  | Error> {
    try {
      const members = await this.prisma.member.findMany();
      return members
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async findOne(memberId: string): Promise<Member | Error> {
    try {
      const member = await this.prisma.member.findUnique({
        where: {
          id: memberId
        }
      })
      return member
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async update(memberId: string, updateMemberDto: UpdateMemberDto): Promise<Member | Error> {
    if(memberId != updateMemberDto.id){
      throw new NotFoundException()
    }

    try {
      const member = await this.prisma.member.update({
        where: {
          id: memberId
        },
        data: updateMemberDto
      })

      return member
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }

  async remove(memberId: string): Promise<Member | Error> {
    try {
      const result = await this.prisma.member.findUnique({
        where: {
          id: memberId
        }
      })

      if(!result){
        throw new NotFoundException()
      }

      return await this.prisma.member.delete({
        where: {
          id: memberId
        }
      })
    }
    catch(error) {
      console.error("Error: ", error)
      throw new InternalServerErrorException()
    }
  }
}
