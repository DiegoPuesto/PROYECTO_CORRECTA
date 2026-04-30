import { UserRole } from './enums/role.enum';
import { Cat } from '../cats/cat.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    role: UserRole;
    isValidated: boolean;
    pets: Cat[];
}
