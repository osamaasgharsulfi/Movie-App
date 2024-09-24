import { IsOptional, IsString, IsDateString, IsArray, IsInt, ArrayUnique } from 'class-validator';

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsDateString()
  dob?: Date;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true }) // Ensure that each item in the array is an integer
  @ArrayUnique()
  categoryIds?: number[];
}
