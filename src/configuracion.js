import { config } from "dotenv";

config();

const PORT = process.env.DB_PORT;
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const NAME = process.env.DB_NAME;


export default {
    PORT,
    HOST,
    USER,
    PASSWORD,
    NAME
}

