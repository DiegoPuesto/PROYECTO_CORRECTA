import { Controller, Get, Post, Body } from '@nestjs/common'; // 1. Asegúrate de importar Post y Body
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto'; // 2. Importamos el DTO de registro para usarlo aquí
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() registerDto: RegisterDto) {
    return this.usersService.create(registerDto);
  }
}