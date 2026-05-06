import { Repository } from 'typeorm';
import { Breed } from './breed.entity';
import { CreateBreedDto } from './dto/create-breed.dto';
export declare class BreedsService {
    private readonly breedRepository;
    constructor(breedRepository: Repository<Breed>);
    create(createBreedDto: CreateBreedDto): Promise<Breed>;
    findAll(): Promise<Breed[]>;
}
