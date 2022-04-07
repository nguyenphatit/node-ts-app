import sequelizeConnection from "../config/db.config";
import { DataTypes, Model } from "sequelize";

export interface UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
}

class UserInstance extends Model<UserAttributes> { }

UserInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: sequelizeConnection,
    tableName: "users"
});

export default UserInstance;