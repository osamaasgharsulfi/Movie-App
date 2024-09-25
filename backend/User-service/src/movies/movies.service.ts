import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getAllMoviesWithCategories() {
    try {
      const data = await this.prisma.movie.findMany({
        include: {
          category: true, // Include the associated category
        },
      });

      if (data.length > 0) {
        return { statusCode: 1, message: 'success', data };
      } else {
        return { statusCode: 1, message: 'No movies found', data: [] };
      }
    } catch (error) {
      return { statusCode: 0, message: 'Error Occurred', error: error.message };
    }
  }

  async getMovieById(movieId: number) {
    try {
      const data = await this.prisma.movie.findUnique({
        where: { id: movieId }, 
        include: {
          category: true, 
        },
      });
  
      if (data) {
        return { statusCode: 1, message: 'success', data };
      } else {
        return {
          statusCode: 1,
          message: 'Movie not found',
          data: null,
        };
      }
    } catch (error) {
      return { statusCode: 0, message: 'Error Occurred', error: error.message };
    }
  }
  
}
