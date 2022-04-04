import sequelizeConnection from "../config/db.config";
import { Model, DataTypes } from "sequelize";

interface TodoAttributes {
    id: string;
    title: string;
    completed: boolean;
}

class TodoInstance extends Model<TodoAttributes> { }

TodoInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: sequelizeConnection,
    tableName: "todos"
});

export default TodoInstance;