
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class History {

    constructor(props: History) {
        Object.assign(this, props);
    }

    @PrimaryGeneratedColumn()
    id?: string;

    @Column({name: 'coin_piggy_id'})
    coinPiggyId: string;

    @Column({type:'date'})
    date;

    @Column()
    description: string;

}