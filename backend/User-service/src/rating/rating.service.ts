import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRatingDto } from './dto';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}

  async rateMovie(userId: number, createRatingDto: CreateRatingDto) {
    try {
      const { movieId, value } = createRatingDto;
  
      // Check if the movie exists
      const movieExists = await this.prisma.movie.findUnique({
        where: { id: movieId },
      });
  
      if (!movieExists) {
        return { statusCode: 0, message: 'Invalid Movie ID', data: [] };
      }
  
      // Check if the user has already rated this movie
      const existingRating = await this.prisma.rating.findFirst({
        where: {
          userId,
          movieId,
        },
      });
  
      if (existingRating) {
        return { statusCode: 0, message: 'You have already rated this movie.', data: [] };
      }
  
      // Create a new rating
      await this.prisma.rating.create({
        data: {
          userId,
          movieId,
          rating: value,
        },
      });
  
      return {
        statusCode: 1,
        message: `Movie rated successfully with a rating of ${value}.`,
        data: [],
      };
    } catch (error) {
      return {
        statusCode: 0,
        message: 'An error occurred while rating the movie.',
        error: error.message,
      };
    }
  }
  
}
