import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./user.entity").User[]>;
    create(registerDto: RegisterDto): Promise<RegisterDto & import("./user.entity").User>;
}
