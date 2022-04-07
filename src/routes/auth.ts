import AuthController from "../controllers/authController";
import { Router } from "express";
import UserValidator from "../validators/user";
import HandleValidation from "../middlewares/handleValidation";

const usersRouter = Router();

usersRouter.route("/register").post(UserValidator.checkRegister(), HandleValidation.handleError, AuthController.register)
usersRouter.route("/login").post(UserValidator.checkLogin(), HandleValidation.handleError, AuthController.login)

export default usersRouter;