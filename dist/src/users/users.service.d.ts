import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
export declare class UsersService implements OnModuleInit {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createDto: RegisterDto): Promise<RegisterDto & User>;
    findOneByEmail(email: string): Promise<User>;
    onModuleInit(): Promise<void>;
}
