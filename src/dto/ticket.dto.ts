import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CUTicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;
}