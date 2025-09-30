import { Router } from "express";
import z from "zod";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";

const router = Router();

const authController = new AuthController();

const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

router.post("/login", validateRequest(LoginSchema), authController.login);

export const authRoutes = router;
