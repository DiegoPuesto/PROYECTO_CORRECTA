import { Controller, Post, Body, Get } from '@nestjs/common';
import { BreedsService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto'; // Asegura el import
import { ApiTags } from '@nestjs/swagger';

@ApiTags('breeds')
@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedsService.create(createBreedDto);
  }

  @Get()
  findAll() {
    return this.breedsService.findAll();
  }
}