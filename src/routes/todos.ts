import { Router } from "express";
import HandleValidation from "../middlewares/handleValidation";
import TodosController from "../controllers/todosController";
import TodoValidator from "../validators/todo";
import AuthJwt from "../middlewares/authJwt";

const todosRouter = Router();

todosRouter.route("/")
    .get(AuthJwt.verifyToken, TodoValidator.checkGetAllTodos(), HandleValidation.handleError, TodosController.getAllTodos)
    .post(AuthJwt.verifyToken, TodoValidator.checkCreateTodo(), HandleValidation.handleError, TodosController.createTodo)

todosRouter.route("/:id")
    .get(AuthJwt.verifyToken, TodoValidator.checkIdParms(), HandleValidation.handleError, TodosController.getTodo)
    .patch(AuthJwt.verifyToken, TodoValidator.checkIdParms(), HandleValidation.handleError, TodosController.updateTodo)
    .delete(AuthJwt.verifyToken, TodoValidator.checkIdParms(), HandleValidation.handleError, TodosController.deleteTodo)

export default todosRouter;