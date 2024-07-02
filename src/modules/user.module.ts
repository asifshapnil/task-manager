import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/auth/strategies/accessToken.strategy';
import { RefreshTokenStrategy } from 'src/auth/strategies/refreshToken.strategy';
import { UserController } from 'src/controllers/user.controller';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  controllers: [UserController],
  providers: [UserService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class UserModule {}
