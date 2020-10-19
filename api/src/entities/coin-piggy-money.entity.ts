
import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity()
export class CoinPiggyMoney {


    @PrimaryColumn({ name: 'coin_piggy_id' })
    coinPiggyId: string;

    @PrimaryColumn({ name: 'money_id' })
    moneyId: number;

    @Column()
    quantity?: number;

}