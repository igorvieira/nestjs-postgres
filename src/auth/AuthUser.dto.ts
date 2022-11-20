import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class AuthUser {
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
