import { IsInt, IsPositive, Max, Min } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  @IsPositive()
  movieId: number;

  @IsInt()
  @IsPositive()
  @Min(1)
  @Max(5)
  value: number; 
}
