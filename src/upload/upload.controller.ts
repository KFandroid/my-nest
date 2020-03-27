import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
@Controller('upload')
export class UploadController {
    @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    debugger
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }
}