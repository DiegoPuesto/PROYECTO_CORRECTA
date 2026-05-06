import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private readonly catRepository;
    constructor(catRepository: Repository<Cat>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
}
