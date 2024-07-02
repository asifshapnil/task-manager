import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CUCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}