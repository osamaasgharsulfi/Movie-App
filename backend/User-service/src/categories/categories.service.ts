import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getAllCategories() {
    try {
      const data = await this.prisma.category.findMany();
      if (data.length > 0) {
        return { statusCode: 1, message: 'success', data };
      } else {
        return {
          statusCode: 1,
          message: 'No categories found',
          data: [],
        };
      }
    } catch (error) {
      return { statusCode: 0, message: 'Error Occured', error: error.message };
    }
  }

  async getCategoryById(id: number) {
    try {
      const data = await this.prisma.category.findUnique({
        where: { id },
        // include: { movies: true }, // Include related movies
      });

      if (data) {
        return { statusCode: 1, message: 'success', data };
      } else {
        return { statusCode: 1, message: 'Category not found' };
      }
    } catch (error) {
      return { statusCode: 0, message: 'Error Occurred', error: error.message };
    }
  }

  async getAllCategoriesWithMovies() {
    try {
      const data = await this.prisma.category.findMany({
        include: { movies: true }, // Include movies in each category
      });

      if (data.length > 0) {
        return { statusCode: 1, message: 'success', data };
      } else {
        return { statusCode: 1, message: 'No categories found', categories: [] };
      }
    } catch (error) {
      return { statusCode: 0, message: 'Error Occurred', error: error.message };
    }
  }





}
