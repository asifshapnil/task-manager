import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { CUCategoryDto } from 'src/dto/category.dto';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoryController extends BaseController {
  constructor(public categoryService: CategoryService) {
    super(categoryService, {
        createDto: CUCategoryDto,
        updateDto: CUCategoryDto
    });
  }
}
