import { Controller, Get, Param } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {}

  @Get('user/:userId')
  async getRecommendations(@Param('userId') userId: string) {
    const recommendations =
      await this.recommendationService.getRecommendedMovies(+userId);
    return recommendations;
  }
}
