import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MulterModule } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Blog } from './blog/blog.entity';
import { File } from './upload/entities/file.entity';
import { Category } from './category/category.entity';
import { UploadModule } from './upload/upload.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [CatsModule, UsersModule, BlogModule,
    CategoryModule,
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files')
    }),
    MulterModule.register({
      dest: './files', 
    }),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "940811Lu",
      // "password": "123456",
      "database": "myblog",
      "synchronize": true,
      "logging": false,
      "entities": [User, Blog, File, Category]
   })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
