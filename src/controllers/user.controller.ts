import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { RefreshTokenGuard } from 'src/core/guards/refreshtoken.guard';
import { CUUserDto, LogoutDto, SignInDto, SignUpDto } from 'src/dto/user.dto';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController extends BaseController {
  constructor(public userService: UserService) {
    super(userService, {
      createDto: CUUserDto,
      updateDto: CUUserDto
    });
  }

  @Post('signup')
  signup(@Body() dto: SignUpDto): Promise<any> {
    return this.userService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: SignInDto): Promise<any> {
    return this.userService.signin(dto);
  }

  @Post('logout')
  logout(@Body() dto: LogoutDto): Promise<boolean> {
    return this.userService.logout(dto.userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refreshTokens(@Body() dto: any): Promise<any> {
    return this.userService.refreshTokens(dto.userId, dto.refreshToken);
  }
}
