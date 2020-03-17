import { Controller, Get, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds new cat'
    }

    @Get(':id')
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }
}
