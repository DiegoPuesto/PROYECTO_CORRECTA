import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from './breed.entity';
import { CreateBreedDto } from './dto/create-breed.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>, // Inyectamos el repositorio
  ) {}

  // POST: Crear una nueva raza
  async create(createBreedDto: CreateBreedDto) {
    const breed = this.breedRepository.create(createBreedDto);
    return await this.breedRepository.save(breed);
  }

  // GET: Obtener todas las razas
  async findAll() {
    return await this.breedRepository.find();
  }
}