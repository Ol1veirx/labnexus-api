import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: CreateUserDto): Promise<User> {
    return await this.userRepository.create(data);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll(); 
  }

  async findOne(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId);
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findUserByEmail(email);
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.update(userId, updateUserDto);
  }

  async remove(userId: string): Promise<User> {
    return await this.userRepository.remove(userId);
  }
}
