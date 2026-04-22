import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll() {
    // Ya no usamos el array, llamamos al servicio que consulta la BBDD
    return await this.catsService.findAll();
  }
}