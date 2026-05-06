import { UsersService } from 'src/users/users.service';
import { RegisterDto } from 'src/users/dto/register.dto';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    register({ password, email }: RegisterDto): Promise<RegisterDto & import("../users/user.entity").User>;
    login(): string;
}
