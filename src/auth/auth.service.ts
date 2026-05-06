import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'; // Necesitamos el servicio de usuarios para guardar
import { RegisterDto } from 'src/users/dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Inyectamos el servicio de usuarios
  ) {}


  async register({ password, email }: RegisterDto) {
    // 1. Verificar si el usuario ya existe
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('El usuario ya existe');
    }

    // 2. Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Crear el usuario en la base de datos
    return await this.usersService.create({
      email,
      password: hashedPassword, // Guardamos la contraseña encriptada!
    });
  }
  async login(loginDto: any) {
  return 'Pronto haremos el login';
}
}