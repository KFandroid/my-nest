import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Blog } from './blog/blog.entity';

@Module({
  imports: [CatsModule, UsersModule, BlogModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "123456",
      "database": "myblog",
      "synchronize": true,
      "logging": false,
      "entities": [User, Blog]
   })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
