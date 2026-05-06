import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({
    description: 'El nombre del gato',
    example: 'Pelusa',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'La edad del gato',
    example: 3,
  })
  @IsInt()
  @IsPositive()
  age: number;

  @ApiProperty({
    description: 'La raza del gato',
    example: 'Persa',
  })
  @IsString()
  breed: string;
}