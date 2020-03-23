import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {CreateBlogDto} from './dto/create-blog.dto'

@Controller('blog')
export class BlogController {
    @Get(':id')
     getBlog(@Param() params): string {
        return `this action is get Blog No${params.id}`
    }

    @Post()
    async create(@Body() createBlogDto: CreateBlogDto) {
        console.log(createBlogDto)
        return `This action adds a blog`
    }
}
