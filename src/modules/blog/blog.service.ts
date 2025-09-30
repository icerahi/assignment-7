import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../helpers/AppError";

export class BlogService {
  async getAllBlogs() {
    const result = await prisma.blog.findMany();

    return {
      meta: { total: result.length },
      data: result,
    };
  }

  async getSingleBlog(id: number) {
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Blog not found!");

    return blog;
  }
}
