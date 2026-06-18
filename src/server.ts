import express from "express";
import { appSourse } from "./db";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swager";
import categoryRoutes from "./routes/category.routes";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/categories", categoryRoutes);

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