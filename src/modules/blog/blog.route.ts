import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  BlogCreateWithoutUserInputObjectZodSchema,
  BlogUpdateInputObjectZodSchema,
} from "../../zodSchemas/schemas";
import { BlogController } from "./blog.controller";

const router = Router();

const blogController = new BlogController();

router.post(
  "/create",
  checkAuth,
  validateRequest(BlogCreateWithoutUserInputObjectZodSchema),
  blogController.createBlog
);

router.get("/all", blogController.getAllBlogs);
router.get("/:id", blogController.getSingleBlog);

router.patch(
  "/:id",
  checkAuth,
  validateRequest(BlogUpdateInputObjectZodSchema),
  blogController.updateBlog
);
router.delete("/:id", checkAuth, blogController.deleteBlog);

export const blogRoutes = router;
