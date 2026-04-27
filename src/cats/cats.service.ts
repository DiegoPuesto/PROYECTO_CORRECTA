import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  // Asegúrate de que este método esté dentro de las llaves { } de la clase CatsService
  async create(catData: any): Promise<Cat[]> {
    const newCats:Cat[] = this.catsRepository.create(catData);
    return await this.catsRepository.save(newCats);
  }
}