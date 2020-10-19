import { CoinPiggy } from "src/entities/coin-piggy.entity";

export interface GoalDTO {
    description: string;
    date: Date;
    value: string
    coinPiggyId:string;
    coinPiggy: CoinPiggy
}