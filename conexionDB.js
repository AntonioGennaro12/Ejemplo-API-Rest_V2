import { createPool } from "mysql2/promise";
import configuracion from "./configuracion.js";

console.log(configuracion.PORT);

const pool = createPool({
    host: configuracion.HOST,
    port: configuracion.PORT,
    user: configuracion.USER,
    password: configuracion.PASSWORD,
    database: configuracion.NAME
});

console.log ("CONEXIÓN A BASE DE DATOS INICIADA");

export default pool;