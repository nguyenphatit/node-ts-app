import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

class AuthJwt {
    verifyToken(req: Request, res: Response, next: NextFunction) {
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(401).send({ message: "Token not found" });
        }

        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized!" });
            }
        });

        next();
    }
}

export default new AuthJwt();