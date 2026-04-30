import { Cat } from '../cats/cat.entity';
export declare class Breed {
    id: number;
    name: string;
    cats: Cat[];
    child_friendly: number;
    energy_level: number;
}
