import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  userRepository: any;
  constructor(private readonly usersService: UsersService) {}

async findAll() {
  return await this.userRepository.find();
}};