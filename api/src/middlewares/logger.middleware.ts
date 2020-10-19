import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { HistoryRepository } from 'src/repositories/HistoryRepository';
import { History } from '../entities/history.entity'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    constructor(private historyRepository: HistoryRepository) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    use(req: Request, res: Response, next: any) {
        const history = new History({
            coinPiggyId: req.body.coinPiggyId,
            description: `${req.query.loggerMessage}`,
            date: new Date()
        });
        this.historyRepository.save(history);
        next();
    }
}
