export declare class CatsController {
    private readonly cats;
    findAll(): {
        id: number;
        nombre: string;
        raza: string;
        edad: number;
    }[];
    findOne(id: string): {
        id: number;
        nombre: string;
        raza: string;
        edad: number;
    } | undefined;
}
