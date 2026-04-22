import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<import("./cat.entity").Cat[]>;
}
