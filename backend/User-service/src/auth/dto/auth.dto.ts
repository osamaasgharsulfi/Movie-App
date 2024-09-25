import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDate,
  IsArray,
  IsInt,
  ArrayUnique,
} from 'class-validator';

import { Type } from 'class-transformer';
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional() // Optional field
  address?: string;

  @IsString()
  @IsOptional() // Optional field
  image?: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dob?: Date;

  // @IsArray()
  // @IsInt({ each: true })
  // @IsNotEmpty()
  // @ArrayUnique()
  // categoryIds: number[];
}
