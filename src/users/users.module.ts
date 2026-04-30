import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController], // <-- Asegúrate de que diga UsersController
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}