import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  ProjectCreateWithoutUserInputObjectZodSchema,
  ProjectUpdateInputObjectZodSchema,
} from "../../zodSchemas/schemas";
import { ProjectController } from "./project.controller";

const router = Router();

const projectController = new ProjectController();

router.get("/all", projectController.getAllProjects);
router.get("/:id", projectController.getSingleProject);

//update routes
router.post(
  "/create",
  checkAuth,
  validateRequest(ProjectCreateWithoutUserInputObjectZodSchema),
  projectController.create
);

router.patch(
  "/:id",
  checkAuth,
  validateRequest(ProjectUpdateInputObjectZodSchema),
  projectController.updateProject
);

export const projectRoutes = router;
