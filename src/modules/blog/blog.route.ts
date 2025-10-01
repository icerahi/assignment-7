import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { BlogCreateWithoutUserInputObjectZodSchema } from "../../zodSchemas/schemas";
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

export const blogRoutes = router;
