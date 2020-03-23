import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module'
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, BlogController],
  providers: [AppService],
})
export class AppModule {}
