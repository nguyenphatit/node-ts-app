import { body, param, query } from "express-validator";

class TodoValidator {
    checkCreateTodo() {
        return [
            body("id")
                .optional().isString(),
            body("title")
                .notEmpty().withMessage("The value should be not empty"),
            body("completed")
                .optional()
                .isBoolean().withMessage("The value should be boolean")
                .isIn([0, false]).withMessage("The value should be 0 or false")

        ]
    }

    checkGetAllTodos() {
        return [
            query("limit")
                .notEmpty().withMessage("The query limit should be not empty")
                .isInt({ min: 1, max: 10}).withMessage("The limit value should be number and between 1-10"),
            query("offset")
                .optional()
                .isNumeric()
                .withMessage("The value should be number")
        ]
    }

    checkIdParms() {
        return [
            param("id")
                .notEmpty()
                .withMessage("The value should be not empty")
                .isString()
                .withMessage("The value should be a string")
        ]
    }
}

export default new TodoValidator();