import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CatsService } from './cats.service';

@ApiTags('cats') // Esto agrupa los endpoints bajo "cats" en la UI
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los gatos' })
  async findAll() {
    return await this.catsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo gato' })
  async create(@Body() body: any) {
    return await this.catsService.create(body);
  }
}