import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

export class UserService {
  async aboutMe() {
    const userInfo = await prisma.user.findFirst({
      select: {
        name: true,
        email: true,
        picture: true,
        phone: true,
        bio: true,
        skills: true,
        experiences: true,
      },
    });

    return userInfo;
  }

  async updateUser(userId: number, payload: Prisma.UserUpdateInput) {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: payload,
      select: {
        name: true,
        email: true,
        picture: true,
        phone: true,
        bio: true,
        skills: true,
      },
    });

    return updatedUser;
  }
}
