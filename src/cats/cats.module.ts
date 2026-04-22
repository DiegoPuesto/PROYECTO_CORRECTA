import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa esto
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Cat])], // <--- ¡ESTO ES LO MÁS IMPORTANTE!
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}