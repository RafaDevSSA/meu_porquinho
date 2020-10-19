import { Injectable, Inject } from "@nestjs/common";
import { History } from "src/entities/history.entity";
import { Repository } from "typeorm";

@Injectable()
export class HistoryRepository {

    constructor(@Inject('HISTORY_REPOSITORY') private historyRepository: Repository<History>) { }

    save(history: History): Promise<History> {
        return this.historyRepository.save(history);
    }

}