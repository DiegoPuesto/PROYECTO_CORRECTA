import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats') // Esto crea una tabla llamada 'cats' en Postgres
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  raza: string;

  @Column()
  edad: number;
}