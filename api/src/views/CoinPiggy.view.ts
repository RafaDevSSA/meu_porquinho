import { CoinPiggy } from "src/entities/coin-piggy.entity";

export class CoinPiggyView {

    public static returnView(coinPiggy: CoinPiggy): CoinPiggy {
        const { name, id } = coinPiggy;
        return { name, id };
    };
}