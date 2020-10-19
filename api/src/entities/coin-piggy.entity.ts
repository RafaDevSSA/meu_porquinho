
import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Goals } from './goals.entity';
import { Users } from './user.entity';


@Entity()
export class CoinPiggy {

    constructor(props: Omit<CoinPiggy, 'id'>, id?: string) {
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
    name: string;

    @ManyToOne(() => Users, user => user.coinPiggy)
    user?: Users;

    @OneToMany(() => Goals, goals => goals.coinPiggy)
    goals?: Goals[];
}