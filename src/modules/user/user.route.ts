import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

const userController = new UserController();

router.get("/about-me", userController.aboutMe);

export const userRoutes = router;
