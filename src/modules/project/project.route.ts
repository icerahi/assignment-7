import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

const projectController = new ProjectController();
router.get("/all", projectController.getAllProjects);

export const projectRoutes = router;
