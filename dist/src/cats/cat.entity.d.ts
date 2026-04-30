import { Breed } from '../breeds/breed.entity';
import { User } from '../users/user.entity';
export declare class Cat {
    id: number;
    externalId: string;
    nickname: string;
    breed: Breed;
    user: User;
}
