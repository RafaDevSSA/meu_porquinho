import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CoinPiggy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string;

    @Column()
    user_id: number;
}