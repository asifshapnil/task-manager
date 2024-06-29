import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from 'src/controllers/category.controller';
import { Category } from 'src/entities/category.entity';
import { CategoryService } from 'src/services/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), JwtModule.register({})],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
