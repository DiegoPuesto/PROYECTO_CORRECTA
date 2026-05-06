import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'usuario@correo.com',
  })
  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  email: string;

  @ApiProperty({
    description: 'Contraseña segura (mínimo 6 caracteres)',
    example: 'password123',
  })
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}