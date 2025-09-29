import { Request, Response, Router } from "express";

const router = Router();

router.use("/login", (req: Request, res: Response) => {
  res.send("login route");
});

export const authRoutes = router;
