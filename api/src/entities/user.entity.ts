
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CoinPiggy } from './coin-piggy.entity';


@Entity()
export class Users {

    constructor(props: Omit<Users, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
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

    @OneToMany(() => CoinPiggy, coinPiggy => coinPiggy.user)
    coinPiggy?: CoinPiggy


}