import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController], 
  providers: [UsersService],
  exports: [UsersService], // <-- Esto es vital para que el módulo Auth pueda usar el UsersService
})
export class UsersModule {}