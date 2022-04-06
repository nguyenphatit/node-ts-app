import UsersController from "../controllers/usersController";
import { Router } from "express";
import UserValidator from "../validators/user";
import HandleValidation from "../middlewares/handleValidation";

const usersRouter = Router();

usersRouter.route("/register").post(UserValidator.checkRegister(), HandleValidation.handleError, UsersController.register)
usersRouter.route("/login").post(UserValidator.checkLogin(), HandleValidation.handleError, UsersController.login)

export default usersRouter;