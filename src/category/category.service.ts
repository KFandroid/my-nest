import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from './category.entity'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = new Category()
        category.name = createCategoryDto.name
        return this.categoryRepository.save(category)
    }

    async findAll(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    findOne(id: string): Promise<Category> {
        return this.categoryRepository.findOne(id)
    }

    async remove(id: string): Promise<void> {
        await this.categoryRepository.delete(id);
    }
}