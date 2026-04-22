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

  // Este método ahora hace una consulta real a la base de datos
  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }
}