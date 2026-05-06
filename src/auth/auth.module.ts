import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; 

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'MI_SEMILLA_SUPER_SECRETA_123', 
      signOptions: { expiresIn: '1d' }, // El token durará 1 día
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}