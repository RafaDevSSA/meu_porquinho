
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CoinPiggy } from './coin-piggy.entity';


@Entity()
export class Goals {


    constructor(props: Omit<Goals, 'id'>) {
        Object.assign(this, props);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({ type: 'date' })
    date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    value;

    @ManyToOne(() => CoinPiggy, coinPiggy => coinPiggy.goals,{cascade: ['remove']})
    coinPiggy?: CoinPiggy

}