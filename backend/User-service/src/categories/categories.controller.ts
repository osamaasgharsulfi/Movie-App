import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private CategoriesService: CategoriesService) {}

  @Get('getAllCategories')
  async getAllCategories() {
    return this.CategoriesService.getAllCategories();
  }

  @Get('getAllCategories/:id')
  async getCategoryById(@Param('id') id: number) {
    return this.CategoriesService.getCategoryById(+id);
  }

  @Get('getAllCategoriesWithMovies')
  async getAllCategoriesWithMovies() {
    return this.CategoriesService.getAllCategoriesWithMovies();
  }
}
