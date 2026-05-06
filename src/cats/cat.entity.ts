import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Breed } from '../breeds/breed.entity'; // Asegura que la ruta sea correcta
import { User } from '../users/user.entity';   // Asegura que la ruta sea correcta

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  // 1. Relación ManyToOne con Breed (Muchos gatos tienen una raza)
  @ManyToOne(() => Breed, (breed) => breed.id, { eager: true })
  breed: Breed;

  // 2. Relación ManyToOne con User (Muchos gatos pertenecen a un usuario)
  @ManyToOne(() => User, (user) => user.id)
  user: User;
}