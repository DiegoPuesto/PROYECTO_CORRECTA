import { AuthService } from './auth.service';
import { RegisterDto } from 'src/users/dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<RegisterDto & import("../users/user.entity").User>;
    login(loginDto: any): Promise<string>;
}
