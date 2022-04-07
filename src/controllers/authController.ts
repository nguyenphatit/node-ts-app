import { Request, Response } from "express";
import AuthService from "../services/authService";

class UsersController {
    public async register(req: Request, res: Response) {
        try {
            const result = await AuthService.register(req.body);

            return res.status(200).send({ message: "Register success", data: result });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const result = await AuthService.login(req.body);

            return res.status(200).send({ message: "Login success", data: result });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

export default new UsersController();