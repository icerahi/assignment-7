import { Request, Response, Router } from "express";

const router = Router();

router.use("/all", (req: Request, res: Response) => {
  res.send("all blogs route");
});

export const blogRoutes = router;
