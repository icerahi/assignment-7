import { Request, Response, Router } from "express";

const router = Router();

router.use("/all", (req: Request, res: Response) => {
  res.send("all experience route");
});

export const projectRoutes = router;
