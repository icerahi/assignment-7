import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { ProjectCreateWithoutUserInputObjectZodSchema } from "../../zodSchemas/schemas";
import { ProjectController } from "./project.controller";

const router = Router();

const projectController = new ProjectController();

router.get("/all", projectController.getAllProjects);
router.get("/:id", projectController.getSingleProject);

router.post(
  "/create",
  checkAuth,
  validateRequest(ProjectCreateWithoutUserInputObjectZodSchema),
  projectController.create
);

export const projectRoutes = router;
