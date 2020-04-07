import { Controller, Get, Param, Post, Body, Delete, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import {CreateBlogDto, UpdateBlogDto} from './dto'
import { Blog } from './blog.entity'
import { BlogService } from './blog.service'
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter, editFileName} from '../utils/file-uploading.utils'
import { diskStorage } from 'multer'

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}

    @Post('upload')
  @UseInterceptors(FileInterceptor('image', 
  {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }
  ))
  async uploadFile(@UploadedFile() file) {
    console.log(file)
    const response = {
      md5: file.md5,
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }
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

    @Put(':id')
    update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
      return this.blogService.update(id, updateBlogDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.blogService.remove(id);
    }
}
