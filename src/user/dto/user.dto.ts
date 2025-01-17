import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string;
}

export class LoginDto{
  @IsNotEmpty()
  @IsString()
  emailOrUsername: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
