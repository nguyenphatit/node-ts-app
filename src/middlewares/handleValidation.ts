import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class HandleValidation {
    handleError(req: Request, res: Response, next: NextFunction) {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).send(error);
        }

        next();
    }
}

export default new HandleValidation();