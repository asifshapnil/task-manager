import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoryController extends BaseController{
  constructor(public categoryService: CategoryService) {
    super(categoryService);
  }
}
