import { Breed } from '../breeds/breed.entity';
import { User } from '../users/user.entity';
export declare class Cat {
    id: number;
    name: string;
    age: number;
    breed: Breed;
    user: User;
}
