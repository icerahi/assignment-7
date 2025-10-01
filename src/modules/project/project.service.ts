import { prisma } from "../../config/db";

export class ProjectService {
  async getAllProjects() {
    const result = await prisma.project.findMany();

    return {
      meta: { total: result.length },
      data: result,
    };
  }
}
