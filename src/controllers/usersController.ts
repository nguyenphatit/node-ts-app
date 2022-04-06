import { Request, Response } from "express";
import UserInstance from "../models/User";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import { aesEncrypter } from "../utils/aes";
import jwt from "jsonwebtoken";

class UsersController {
    public async register(req: Request, res: Response) {
        try {
            const record = await UserInstance.findOne({ where: { email: req.body.email }});
                        
            if (record) {
                return res.status(400).send({ message: "User has exists" });
            }

            const id = uuidv4();
            let password = bcrypt.hashSync(req.body.password, 10);
            let phone = aesEncrypter(req.body.phone);
            const result = await UserInstance.create({ ...req.body, id, password, phone });

            const token = jwt.sign({ id: result.getDataValue("id") }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

            return res.status(200).send({ message: "Register success", data: { token, user: result } });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const record = await UserInstance.findOne({ where: { email: req.body.email }});
            
            if (!record) {
                return res.status(400).send({ message: "User doesn't exists" });
            }

            let password = bcrypt.compareSync(req.body.password, record.getDataValue("password"));

            if (!password) {
                return res.status(401).send("Password not matched");
            }

            const token = jwt.sign({ id: record.getDataValue("id") }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

            return res.status(200).send({ message: "Login success", data: { token, user: record } });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

export default new UsersController();