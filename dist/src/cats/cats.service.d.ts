import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: Repository<Cat>);
    findAll(): Promise<Cat[]>;
}
