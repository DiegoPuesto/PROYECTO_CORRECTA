import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../users/dto/register.dto").RegisterDto & import("../users/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
}
