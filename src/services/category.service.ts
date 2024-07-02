import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base-service';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends BaseService {
  constructor(@InjectRepository(Category) public categoryRepository: Repository<Category>) {
    super(categoryRepository, ['tickets']);
  }
}
