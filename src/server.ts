import express from "express";
import { appSourse } from "./db";

const app = express();

app.use(express.json());

async function startServer() {
    try {
        await appSourse.initialize();
        console.log("Database Connected");
        app.listen(3000, () => {
            console.log('Database connected at port 3000');
        })
    } catch (err) {
        console.log('Database connection failed', err);
    }
}

startServer();