import { NextFunction, Request, Response } from "express";
import AppError from "../helpers/AppError";
import { TErrorSources } from "../types/error.types";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = `Someting went wrong!!`;

  // eslint-disable-next-line prefer-const
  let errorSource: TErrorSources[] = [
    //{path:"",message:""}
  ];
  if (error.code === 11000) {
    statusCode = 400;
    message = error.message.match(/"([^"]*)"/);
  } else if (error.name === "CastError") {
    statusCode = 400;
    message = "Invalid MongoDB ObjectID. Please provide valid ID";
  } else if (error.name === "ZodError") {
    statusCode = 400;
    message = "Zod Error";

    error.issues.forEach((issue: any) => {
      errorSource.push({
        path: issue.path[issue.path.length - 1],
        message: issue.message,
      });
    });
  } else if (error.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(error.errors);
    errors.forEach((errorObject: any) =>
      errorSource.push({ path: errorObject.path, message: errorObject.message })
    );
    message = "Validation Error";
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error instanceof Error) {
    statusCode = 500;
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSource,
  });
};
