import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../config/db";
import { env } from "../../config/env";
import AppError from "../../helpers/AppError";

export class AuthService {
  async login(payload: { email: string; password: string }) {
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, "User does not exist!");
    }

    const passwordMatched = await bcrypt.compare(
      payload.password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "Password is incorrect!");
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const accessToken = jwt.sign(jwtPayload, env.JWT_SECRET, {
      expiresIn: env.JWT_ACCESS_TOKEN_EXPIRES,
    });

    return user;
  }
}
