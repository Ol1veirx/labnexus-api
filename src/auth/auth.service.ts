import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email)

    if(user) {
      throw new UnauthorizedException("Email ja existe")
    }
    
    const passwordMatch = await bcrypt.compare(pass, user.password)

    if(!passwordMatch) {
      throw new UnauthorizedException("Email ou senha invalida")
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async signUp(createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findUserByEmail(createUserDto.email)
    
    if(existingUser) {
      throw new ConflictException("Email já existe")
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    })

    const accessToken = await this.generateToken(user.id, user.email)

    return { access_token: accessToken }


  }

  private async generateToken(userId: string, email: string) {
    const payload = { sub: userId, email: email }
    return this.jwtService.signAsync(payload)
  }
}
