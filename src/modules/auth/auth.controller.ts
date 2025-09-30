import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class AuthController {
  login = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const loginInfo = await authService.login(req.body);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Login successful!",
        data: loginInfo,
      });
    }
  );
}
