import { Request, Response } from "express";
import TodoInstance from "../models/Todo";
import { v4 as uuidv4 } from 'uuid';
import { Op } from "sequelize/types";

class TodosController {
    public async createTodo(req: Request, res: Response) {
        const id = uuidv4();
        try {
            const result = await TodoInstance.create({ ...req.body, id });
            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send({ message: "Error" });
        }
    }

    public async getAllTodos(req: Request, res: Response) {
        try {
            const limit = req.query?.limit ? +req.query.limit : undefined;
            const offset = req.query?.offset ? +req.query.offset : undefined;
            const results = await TodoInstance.findAll({ where: {}, order: [["createdAt", "DESC"]], offset, limit });
            return res.status(200).send({ message: "Success", data: results });
        } catch (error) {
            return res.status(500).send({ message: "Error" });
        }
    }
    
    public async getTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const results = await TodoInstance.findAll({ where: { id }, order: [["createdAt", "DESC"]]});
            return res.status(200).send({ message: "Success", data: results });
        } catch (error) {
            return res.status(500).send({ message: "Error" });
        }
    }

    public async updateTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await TodoInstance.findOne({ where: { id }});

            if (!record) {
                return res.status(400).send({ message: "Not found" });
            }

            const result = await record.update({
                completed: !record.getDataValue("completed")
            });

            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send({ message: "Error" });
        }
    }

    public async deleteTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await TodoInstance.findOne({ where: { id }});

            if (!record) {
                return res.status(400).send({ message: "Not found" });
            }

            const result = await record.destroy();
            return res.status(200).send({ message: "Success", data: result });
        } catch (error) {
            return res.status(500).send({ message: "Error" });
        }
    }
}

export default new TodosController();