import TodoInstance, { TodoAttributes } from "../models/Todo";
import { v4 as uuidv4 } from 'uuid';

class TodoService {
    public async createTodo(body: TodoAttributes): Promise<TodoInstance> {
        const id = uuidv4();
        return await TodoInstance.create({ ...body, id });
    }

    public async updateTodo(id: string): Promise<TodoInstance | null> {
        const record = await TodoInstance.findOne({ where: { id } });

        if (!record) return null;

        return await record.update({
            completed: !record.getDataValue("completed")
        });
    }

    public async deleteTodo(id: string): Promise<void | null> {
        const record = await TodoInstance.findOne({ where: { id }});

        if (!record) return null;

        return await record.destroy();
    }

    public async getAllTodos(limit: number | undefined, offset: number | undefined): Promise<TodoInstance[]> {
        return await TodoInstance.findAll({ where: {}, order: [["createdAt", "DESC"]], offset, limit });
    }

    public async getTodo(id: string): Promise<TodoInstance | null> {
        return await TodoInstance.findOne({ where: { id }});
    }
}

export default new TodoService();