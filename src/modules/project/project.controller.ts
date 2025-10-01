import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

const projectService = new ProjectService();

export class ProjectController {
  getAllProjects = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const result = await projectService.getAllProjects();

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "All projects retrieved Successfully!",
        meta: result.meta,
        data: result.data,
      });
    }
  );
}
