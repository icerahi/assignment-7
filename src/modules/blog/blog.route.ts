import { Request, Response, Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { BlogController } from "./blog.controller";

const router = Router();

const blogController = new BlogController();

router.post("/create", checkAuth, (req: Request, res: Response) => {
  res.send("all blogs route");
});

router.get("/all", blogController.getAllBlogs);
router.get("/:id", blogController.getSingleBlog);

export const blogRoutes = router;
