import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { BreedsModule } from './breeds/breed.module';

@Module({
  imports: [
    // 1. Cargamos el módulo de configuración
    ConfigModule.forRoot({
      isGlobal: true, // Para que esté disponible en toda la app
    }),

    // 2. Usamos forRootAsync para poder inyectar el ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    CatsModule,
    UsersModule,
    BreedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}