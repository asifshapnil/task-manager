import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base-service';
import { Category } from 'src/entities/category.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService {
  constructor(@InjectRepository(User) public userRepository: Repository<User>) {
    super(userRepository, ['actionhistory']);
  }
}
