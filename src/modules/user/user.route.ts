import { Request, Response, Router } from "express";
import { prisma } from "../../config/db";

const router = Router();

router.get("/me", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany({});
  res.json(user);
});

export const userRoutes = router;
