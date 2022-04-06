import { body, param, query } from "express-validator";

class UserValidator {
    checkRegister() {
        return [
            body("email")
                .notEmpty().withMessage("The value should be not empty")
                .isEmail().withMessage("The value should be a valid email"),
            body("password")
                .notEmpty().withMessage("The value should be not empty")
                .isString().withMessage("The value should be a string"),
            body("name")
                .notEmpty().withMessage("The value should be not empty")
                .isString().withMessage("The value should be a string")
        ]
    }

    checkLogin() {
        return [
            body("email")
                .notEmpty().withMessage("The value should be not empty")
                .isEmail().withMessage("The value should be a valid email"),
            body("password")
                .notEmpty().withMessage("The value should be not empty")
                .isString().withMessage("The value should be a string")
        ]
    }
}

export default new UserValidator();