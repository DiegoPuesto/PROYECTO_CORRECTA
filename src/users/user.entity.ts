import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRole } from './enums/role.enum';
import { Cat } from '../cats/cat.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.UNREGISTERED,
  })
  role: UserRole;

  @Column({ default: false })
  isValidated: boolean;

  @OneToMany(() => Cat, (cat) => cat.user)
  pets: Cat[];
}