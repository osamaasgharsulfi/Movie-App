import { Injectable } from '@nestjs/common';
import { connect } from 'http2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecommendationService {
  constructor(private prisma: PrismaService) {}

  async getRecommendedMovies(userId: number) {
    try {
      const data = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          ratings: {
            include: {
              movie: {
                include: {
                  category: {
                    select: {
                      name: true, // Assuming `name` is the field for category
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (data == null) {
        return {
          statusCode: 0,
          message: `Invalid user Id: ${userId}`,
          data: [],
        };
      } else if (data.ratings.length) {
        const formattedData = data.ratings.map((rating) => ({
          movieId: rating.movie.id,
          title: rating.movie.title,
          description: rating.movie.description,
          category: rating.movie.category.name,
          rating: rating.rating,
        }));

        return {
          statusCode: 1,
          message: 'Recommended list is ',
          data: formattedData,
        };
      } else {
        return {
          statusCode: 0,
          message: `No rating found against user Id ${userId}`,
          data: [],
        };
      }
    } catch (error) {
      return { statusCode: 0, message: 'Error Occured', error: error.message };
    }
  }
}
