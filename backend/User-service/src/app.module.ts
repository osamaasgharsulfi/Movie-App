import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MoviesModule,
    CategoriesModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    RatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
