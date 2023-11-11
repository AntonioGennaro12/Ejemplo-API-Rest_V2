import { config } from "dotenv";

config();

const DB_PORT = process.env.DB_PORT;
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
const URL_PERMIT_1 = process.env.URL_PERMIT_1;


export default {
    DB_PORT,
    HOST,
    USER,
    PASSWORD,
    NAME,
    PORT,
    URL_PERMIT_1
}

