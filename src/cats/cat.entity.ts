import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Breed } from '../breeds/breed.entity';
import { User } from '../users/user.entity';

@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  externalId: string; // ID que viene de la API externa

  @Column({ nullable: true })
  nickname: string; // El nombre que le pone el usuario al adoptarlo

  // Muchos gatos tienen una misma raza
  @ManyToOne(() => Breed, (breed) => breed.cats, { cascade: true, eager: true })
  breed: Breed;

  // Muchos gatos pueden pertenecer a un usuario (dueño)
  // Nullable porque al principio están "libres" en la BD
  @ManyToOne(() => User, (user) => user.pets, { nullable: true })
  user: User;
}