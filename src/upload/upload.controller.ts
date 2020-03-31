import { Controller, Post, UseInterceptors, UploadedFile, Body, HttpStatus, Get, Param } from '@nestjs/common';
import { File } from './entities/file.entity'
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';
import { diskStorage } from 'multer'
import { CreateFileDto } from './dto/create-file.dto';
import { FileService } from './file.service';
@Controller('upload')
export class UploadController {

  constructor(private readonly fileService: FileService) {}
  @Post(`file`)
  create(@Body() createFileDto: CreateFileDto): Promise<File> {
    return  this.fileService.create(createFileDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<File> {
    return this.fileService.findOne(id)
  }
    @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }
  ))
  async uploadFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }
}