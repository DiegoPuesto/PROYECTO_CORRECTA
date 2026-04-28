import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { describe, beforeEach, it } from 'node:test';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
