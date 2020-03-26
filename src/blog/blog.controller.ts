import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import {CreateBlogDto} from './dto/create-blog.dto'
import { Blog } from './blog.entity'
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}

    @Post()
    create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
        return this.blogService.create(createBlogDto);
    }

    @Get()
    async findAll(): Promise<Blog[]> {
        return this.blogService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Blog> {
        return this.blogService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.blogService.remove(id);
    }
}
