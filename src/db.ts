import { DataSource } from "typeorm";
import { Category } from "./entity/category";

export const appSourse = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'myapp_user',
    password: 'Bright@1735',
    database: 'myappdb',
    synchronize: false,
    logging: true,
    entities: [Category],
});