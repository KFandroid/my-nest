import { Controller, Post, UseInterceptors, UploadedFile, Body, Req, HttpStatus, Get, Param } from '@nestjs/common';
import { File } from './entities/file.entity'
import { Request } from 'express'
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';
import { diskStorage } from 'multer'
import { CreateFileDto } from './dto/create-file.dto';
import { FileService } from './file.service';
import {extname} from 'path'
import * as fs from 'fs'
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
    @Post('')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }
  ))
  async uploadFile(@Req() request: Request, @UploadedFile() file) {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const realName = `${name}${request.body.md5}${fileExtName}`
    fs.renameSync('./files/' + file.filename, './files/' + realName)
    
    const response = {
      originalname: file.originalname,
      filename: realName,
    };
    return response;
  }
}