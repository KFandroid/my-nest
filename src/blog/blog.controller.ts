import { Controller, Get, Param, Post, Body, Res, HttpStatus } from '@nestjs/common';
import {CreateBlogDto} from './dto/create-blog.dto'
import { Response } from 'express'

@Controller('blog')
export class BlogController {
    @Get(':id')
     getBlog(@Param() params): string {
        return `this action is get Blog No${params.id}`
    }

    @Post()
    async create(@Body() createBlogDto: CreateBlogDto, @Res() res: Response) {
        console.log(createBlogDto)
        res.status(HttpStatus.CREATED).send({
            status:'ojbk'
        });
    }
}
