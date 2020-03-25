import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { BlogController } from './blog/blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CatsModule, UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController, BlogController],
  providers: [AppService],
})
export class AppModule {}
