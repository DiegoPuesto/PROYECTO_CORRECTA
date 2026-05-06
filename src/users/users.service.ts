import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { UserRole } from './enums/role.enum';
import * as bcrypt from 'bcrypt'; // Importamos bcrypt para encriptar también la contraseña del Admin

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 1. Para que el Auth pueda registrar usuarios estándar
  async create(createDto: RegisterDto) {
    return await this.userRepository.save(createDto);
  }

  // 2. Para que el Auth pueda buscar si el email ya existe
async findOneByEmail(email: string) {
  return await this.userRepository.findOneBy({ email });
}

  // 3. Método findAll para que el controlador no de error
  async findAll() {
    return await this.userRepository.find();
  }
  

  // 4. El Seeder que crea al admin al arrancar si no existe
  async onModuleInit() {
    const adminExists = await this.findOneByEmail('admin@admin.com');
    
    if (!adminExists) {
      // Encriptamos la contraseña por seguridad
      const hashedPassword = await bcrypt.hash('password123', 10);

      const admin = this.userRepository.create({
        email: 'admin@admin.com',
        password: hashedPassword,
        role: UserRole.ADMIN, // Aquí TypeORM sí te deja usar el rol porque mapea directo a la Entity
      });
      
      await this.userRepository.save(admin);
    }
  }
}