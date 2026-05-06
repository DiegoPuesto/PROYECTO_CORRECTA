import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto'; // <-- Asegúrate de que el import sea correcto
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // 1. Método de Registro que le falta a tu controlador
  async register(registerDto: RegisterDto) {
    // Verificamos si el email ya existe
    const userExists = await this.usersService.findOneByEmail(registerDto.email);
    if (userExists) {
      throw new BadRequestException('El correo ya está registrado');
    }

    // Encriptamos la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Guardamos el usuario a través de UsersService
    return await this.usersService.create({
      email: registerDto.email,
      password: hashedPassword,
    });
  }

  // 2. Tu método de Login (El que ya teníamos)
  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('El email no es correcto');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña no es correcta');
    }

    const payload = { email: user.email, sub: user.id };
    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: user.email,
    };
  }
}