import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<import("./cat.entity").Cat[]>;
    create(createCatDto: CreateCatDto): Promise<import("./cat.entity").Cat[]>;
}
