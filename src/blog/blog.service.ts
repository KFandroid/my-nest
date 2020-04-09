import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateBlogDto, UpdateBlogDto } from './dto'
import { Blog } from './blog.entity'

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>, 
    ) {}

    create(createBlogDto: CreateBlogDto): Promise<Blog> {
        const blog = new Blog();
        blog.title = createBlogDto.title;
        blog.text = createBlogDto.text;
        return this.blogRepository.save(blog)
    }

   async update(id: string, updateBlogDto: UpdateBlogDto): Promise<void> {
        await this.blogRepository.update(id, {
            title: updateBlogDto.title,
            text: updateBlogDto.text
        })
    }

    async findAll(): Promise<Blog[]> {
        return this.blogRepository.find({
            order: {
                createdAt: 'DESC'
            }
        })
    }

    findOne(id: string): Promise<Blog> {
        return this.blogRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.blogRepository.delete(id);
    }
}