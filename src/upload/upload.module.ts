import { Module } from '@nestjs/common';
import {UploadController} from './upload.controller';
import { File } from './entities/file.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileService } from './file.service';

@Module({
    imports: [TypeOrmModule.forFeature([File])],
    providers: [FileService],
    controllers: [UploadController],
})

export class UploadModule {}