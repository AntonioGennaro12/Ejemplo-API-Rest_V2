import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Anto8567",
    database: "misAmigos_db"
});

console.log ("CONEXIÓN A BASE DE DATOS INICIADA");

export default pool;