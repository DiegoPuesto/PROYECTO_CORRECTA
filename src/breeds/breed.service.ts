import { Injectable } from '@nestjs/common';

@Injectable()
export class BreedsService {
  findAll() {
    return []; // De momento que devuelva una lista vacía
  }
}