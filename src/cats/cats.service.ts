import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    // Creamos el objeto del gato mapeando breed como un objeto parcial de tipo Breed
    const cat = this.catRepository.create({
      name: createCatDto.name,
      age: createCatDto.age,
      breed: { id: 1 } as any, 
    });

    return await this.catRepository.save(cat);
  }

  async findAll() {
    return await this.catRepository.find();
  }
}