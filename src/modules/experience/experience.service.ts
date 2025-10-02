import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

export class ExperienceService {
  async create(
    userId: number,
    payload: Prisma.WorkExperienceCreateWithoutUserInput
  ) {
    const experienceData = {
      ...payload,
      userId,
    };

    const result = await prisma.workExperience.create({ data: experienceData });
    return result;
  }
}
