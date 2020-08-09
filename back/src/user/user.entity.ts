import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    first_name: string;

    @Column({ length: 40 })
    last_name: string;

    @Column({ length: 100, unique:true })
    email: string;

    @Column({ length: 200 })
    password: string;

    @BeforeInsert() async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}