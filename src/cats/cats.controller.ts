import { Controller, Get, Post, HttpCode, Header, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds new cat'
    }

    @Get(':id')
    findAll(@Param() params): string {
        console.log(params.id)
        return `This action return all cats ${params.id}`
    }
}
