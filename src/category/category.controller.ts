import { Controller, Post, Body, Get, Param, Delete } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./category.entity";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.create(createCategoryDto)
    }   

    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Category> {
        return this.categoryService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.categoryService.remove(id)
    }
}