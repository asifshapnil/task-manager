import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CUUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  refresh_token: string;
}