import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CUUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  refresh_token: string;
}

export class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LogoutDto {
  @IsNotEmpty()
  userId: number;
}