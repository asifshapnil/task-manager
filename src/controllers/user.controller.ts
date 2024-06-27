import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController extends BaseController{
  constructor(public userService: UserService) {
    super(userService);
  }
}
