
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum TypeMoney {
    CEDULA = 'cedula',
    MOEDA = 'moeda'
}

@Entity()
export class Money {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    value;

    @Column({ nullable: true })
    image: string;

    @Column({ type: 'set', enum: TypeMoney })
    type: TypeMoney[]

}