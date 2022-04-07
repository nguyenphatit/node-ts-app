import UserInstance, { UserAttributes } from "../models/User";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import { aesEncrypter } from "../utils/aes";
import jwt from "jsonwebtoken";

class AuthService {
    public async register(body: UserAttributes) {
        const record = await UserInstance.findOne({ where: { email: body.email }});

        if (!record) return "User has exists";

        const id = uuidv4();

        let password = bcrypt.hashSync(body.password, 10);
        let phone = aesEncrypter(body.phone);
        const result = await UserInstance.create({ ...body, id, password, phone });

        const token = jwt.sign({ id: result.getDataValue("id") }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        return { token, user: result };
    }

    public async login(body: { email: string, password: string }) {
        const record = await UserInstance.findOne({ where: { email: body.email }});
        
        if (!record) return "User doesn't exists";

        let password = bcrypt.compareSync(body.password, record.getDataValue("password"));

        if (!password) return "Password not matched";

        const token = jwt.sign({ id: record.getDataValue("id") }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        return { token, user: record };
    }
}

export default new AuthService();