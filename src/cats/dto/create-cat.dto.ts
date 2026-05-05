import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateCatDto {
    @ApiProperty({ example: 'Maya' })
  @IsString()
  @MinLength(3)
  name: string;


  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed?: string; // El '?' significa que es opcional
}