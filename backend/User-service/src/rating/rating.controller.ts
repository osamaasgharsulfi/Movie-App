import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateRatingDto } from './dto';
import { RatingService } from './rating.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtGuard)
@Controller('rating')
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Post('rateMovie')
  async rateMovie(
    @Body() createRatingDto: CreateRatingDto,
    @GetUser('id') userId: number,
  ) {
    return this.ratingService.rateMovie(userId, createRatingDto);
  }
}
