import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30, name: 'first_name' })
  firstName: string;

  @Column({ length: 40 })
  lastName: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 200 })
  password: string;

  @BeforeInsert() async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }
}
