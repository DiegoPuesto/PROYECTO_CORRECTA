import { BreedsService } from './breed.service';
export declare class BreedsController {
    private readonly breedsService;
    constructor(breedsService: BreedsService);
    findAll(): any[];
    create(createBreedDto: any): string;
}
