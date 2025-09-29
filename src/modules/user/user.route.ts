import { Request, Response, Router } from "express";

const router = Router();

router.get("/me", (req: Request, res: Response) => {
  res.send("Hey it's meeeee");
});

export const userRoutes = router;
