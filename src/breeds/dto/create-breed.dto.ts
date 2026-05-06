import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateBreedDto {
  @ApiProperty({
    description: 'El nombre de la raza de gato',
    example: 'Persa',
  })
  @IsString()
  @MinLength(3, { message: 'El nombre de la raza debe tener al menos 3 caracteres' })
  name: string;

  @ApiProperty({
    description: 'Qué tan amigable es con los niños (escala del 1 al 5)',
    example: 5,
  })
  @IsInt()
  @Min( 1 )
  @Max( 5 )
  childFriendly: number;

  @ApiProperty({
    description: 'Nivel de energía del gato (escala del 1 al 5)',
    example: 2,
  })
  @IsInt()
  @Min( 1 )
  @Max( 5 )
  energyLevel: number;
}