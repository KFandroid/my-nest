import { Repository } from 'typeorm'
import { CreateFileDto } from './dto/create-file.dto'
import { File } from './entities/file.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(File)
        private readonly fileRepository: Repository<File>,
    ) {}

    create(createFileDto: CreateFileDto): Promise<File> {
        const file = new File();
        file.id = createFileDto.id;
        file.name = createFileDto.name;
        return this.fileRepository.save(file);
    }

    findOne(id: string): Promise<File> {
        return this.fileRepository.findOne(id)
    }
}