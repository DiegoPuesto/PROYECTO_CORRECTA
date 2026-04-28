import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger'; // Asegúrate de importar ApiBody
import { CatsService } from './cats.service';

@ApiTags('cats')
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
  @ApiBody({ // Esto crea la interfaz para que rellenes los datos
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        breed: { type: 'string' },
      },
    },
  })
  async create(@Body() body: any) {
    return await this.catsService.create(body);
  }
}