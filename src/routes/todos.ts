import { Router } from "express";
import HandleValidation from "../middlewares/handleValidation";
import TodosController from "../controllers/todosController";
import TodoValidator from "../validators/todo";

const todosRouter = Router();

todosRouter.route("/")
    .get(TodoValidator.checkGetAllTodos(), HandleValidation.handleError, TodosController.getAllTodos)
    .post(TodoValidator.checkCreateTodo(), HandleValidation.handleError, TodosController.createTodo)

todosRouter.route("/:id")
    .get(TodoValidator.checkIdParms(), HandleValidation.handleError, TodosController.getTodo)
    .patch(TodoValidator.checkIdParms(), HandleValidation.handleError, TodosController.updateTodo)
    .delete(TodoValidator.checkIdParms(), HandleValidation.handleError, TodosController.deleteTodo)

export default todosRouter;