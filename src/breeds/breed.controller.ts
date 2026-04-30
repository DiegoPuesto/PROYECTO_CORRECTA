import { Controller, Get, Post, Body } from '@nestjs/common'; // Asegúrate de importar Get, Post, Body
import { BreedsService } from './breed.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('breeds')
@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  findAll() {
    return this.breedsService.findAll();
  }

  // Si quieres que también salga el botón de crear en Swagger:
  @Post()
  create(@Body() createBreedDto: any) {
    return 'Esta ruta creará una raza pronto';
  }
}