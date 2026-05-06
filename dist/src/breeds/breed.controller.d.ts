import { BreedsService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
export declare class BreedsController {
    private readonly breedsService;
    constructor(breedsService: BreedsService);
    create(createBreedDto: CreateBreedDto): Promise<import("./breed.entity").Breed>;
    findAll(): Promise<import("./breed.entity").Breed[]>;
}
