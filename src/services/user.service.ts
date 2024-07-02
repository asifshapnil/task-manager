import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base-service';
import { Category } from 'src/entities/category.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as argon from 'argon2';
import { SignInDto, SignUpDto } from 'src/dto/user.dto';

@Injectable()
export class UserService extends BaseService {
  constructor(@InjectRepository(User) public userRepository: Repository<User>,
    private jwtService: JwtService,
    private config: ConfigService) {
    super(userRepository, ['actionhistory']);
  }

  async signup(dto: SignUpDto): Promise<any> {
    const hash = await argon.hash(dto.password);

    const user = await this.insert({...dto, password: hash});

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async signin(dto: SignInDto): Promise<any> {
    const user = await this.findOne({
      email: dto.email
    });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await argon.verify(user.password, dto.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: number): Promise<boolean> {
    await this.update(userId, {
      refresh_token: null
    });
    return true;
  }

  async refreshTokens(userId: number, rt: string): Promise<any> {
    const user = await this.findOne({
      id: userId
    });
    if (!user || !user.refresh_token) throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.refresh_token, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async updateRefreshToken(userId: number, rt: string): Promise<void> {
    const hash = await argon.hash(rt);
    await this.update(userId, {
      refresh_token: hash
    });
  }

  async getTokens(userId: number, email: string): Promise<any> {
    const jwtPayload: any = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }


}
