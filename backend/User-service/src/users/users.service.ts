import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserProfileDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUserProfile(userId: number, dto: UpdateUserProfileDto) {
    try {
      // Update user details
      const updatedUser = await this.prisma.user.update({
        where: { id: userId },
        data: {
          name: dto.name,
          address: dto.address,
          image: dto.image,
          dob: dto.dob,
          categories: {
            connect: dto.categoryIds?.map((id) => ({ id })),
          },
          categoryIds: dto.categoryIds,
        },
        include: {
          categories: true, // Include updated categories in the response
        },
      });

      return {
        statusCode: 1,
        message: 'User profile updated successfully',
        data: updatedUser,
      };
    } catch (error) {
      return { statusCode: 0, message: 'Error occurred', error: error.message };
    }
  }
}
