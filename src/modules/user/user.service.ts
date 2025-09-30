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
}
