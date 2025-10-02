import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserUpdateInputObjectZodSchema } from "../../zodSchemas/schemas";
import { UserController } from "./user.controller";

const router = Router();

const userController = new UserController();

router.get("/about-me", userController.aboutMe);
router.patch(
  "/update",
  checkAuth,
  validateRequest(UserUpdateInputObjectZodSchema),
  userController.updateUser
);

export const userRoutes = router;
