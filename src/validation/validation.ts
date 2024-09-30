import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";

export function validation(req: Request, res: Response, next: NextFunction) {
  req.validate = async function <T>(cons: new () => T) {
    const data = plainToClass(cons, req.body);
    const errors = await validate(data as object);
    if (errors.length <= 0) {
      return data as T;
    }
    throw {
      message: errors[0].toString(),
    };
  };

  next();
}

declare global {
  namespace Express {
    interface Request {
      validate: <T>(cons: new () => T) => Promise<T>;
    }
  }
}
