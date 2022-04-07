import { Request, Response } from "express";
import TodoService from "../services/todoService";

class TodosController {
    public async createTodo(req: Request, res: Response) {
        try {
            const result = await TodoService.createTodo(req.body);
            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async getAllTodos(req: Request, res: Response) {
        try {
            const limit = req.query?.limit ? +req.query.limit : undefined;
            const offset = req.query?.offset ? +req.query.offset : undefined;
            const results = await TodoService.getAllTodos(limit, offset);
            return res.status(200).send({ message: "Success", data: results });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
    
    public async getTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await TodoService.getTodo(id);
            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async updateTodo(req: Request, res: Response) {
        try {
            const result = await TodoService.updateTodo(req.params.id);

            if (!result)
                return res.status(400).send({ message: "Not found" });

            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async deleteTodo(req: Request, res: Response) {
        try {
            const result = await TodoService.deleteTodo(req.params.id);

            if (!result)
                return res.status(400).send({ message: "Not found" });

            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

export default new TodosController();