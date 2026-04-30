import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cat } from '../cats/cat.entity';

@Entity('breeds')
export class Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  // Una raza puede pertenecer a muchos gatos
  @OneToMany(() => Cat, (cat) => cat.breed)
  cats: Cat[];

  // Campos opcionales del enunciado (puedes añadirlos ahora para nota)
  @Column({ nullable: true })
  child_friendly: number;

  @Column({ nullable: true })
  energy_level: number;
}