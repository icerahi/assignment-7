import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.service";

const userService = new UserService();
export class UserController {
  //about me
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

  //update user
  updateUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const decodedToken = req.user;

      const userInfo = await userService.updateUser(decodedToken.id, req.body);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "User Information updated successfully!",
        data: userInfo,
      });
    }
  );
}
