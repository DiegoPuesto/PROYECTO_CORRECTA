import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cat } from '../cats/cat.entity'; 

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Forzamos a TypeORM a enlazar "childFriendly" con la columna "child_friendly"
  @Column({ name: 'child_friendly', default: 3 })
  childFriendly: number;

  // Forzamos a TypeORM a enlazar "energyLevel" con la columna "energy_level"
  @Column({ name: 'energy_level', default: 3 })
  energyLevel: number;

  @OneToMany(() => Cat, (cat) => cat.breed)
  cats: Cat[];
}