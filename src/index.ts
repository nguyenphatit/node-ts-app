import express, { Application, Request, Response } from 'express';
import dotenv from "dotenv";
import db from "./config/db.config";
import router from "./routes";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app: Application = express();
const port: number | string = process.env.PORT || 8080;

const connectWithRetry = () => {
    db.sync().then(() => {
        console.log("Connect to database successfully");
    }).catch(error => {
        console.log("Error: ", error);
        setTimeout(connectWithRetry, 5000);
    });
}

connectWithRetry();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
});

app.use("/api/v1", router);

try {
    app.listen(port, () => {
        console.log(`Server running ${process.env.NODE_ENV} on http://localhost:${port}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}