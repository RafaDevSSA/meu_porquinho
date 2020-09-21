
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity()
export class Users {

    constructor(props: Omit<Users, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ type: 'int' })
    age: number;

}