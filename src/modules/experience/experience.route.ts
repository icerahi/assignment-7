import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  WorkExperienceCreateWithoutUserInputObjectZodSchema,
  WorkExperienceUpdateInputObjectZodSchema,
} from "../../zodSchemas/schemas";
import { ExperienceController } from "./experience.controller";

const router = Router();

const experienceController = new ExperienceController();

router.post(
  "/create",
  checkAuth,
  validateRequest(WorkExperienceCreateWithoutUserInputObjectZodSchema),
  experienceController.create
);

router.patch(
  "/update/:id",
  checkAuth,
  validateRequest(WorkExperienceUpdateInputObjectZodSchema),
  experienceController.updateExperience
);

router.delete("/delete/:id", checkAuth, experienceController.deleteExperience);
router.get("/:id", experienceController.getSingleExperience);

export const experienceRoutes = router;
