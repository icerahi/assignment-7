import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.service";

const userService = new UserService();
export class UserController {
  aboutMe = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const userInfo = await userService.aboutMe();

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "About me Information retrieved!",
        data: userInfo,
      });
    }
  );
}
