import { createPool } from "mysql2/promise";
import configuracion from "./configuracion.js";

/* Creo la tabla segun los datos mínimos requeridos */
const CREAR_TABLA = ` 
    CREATE TABLE IF NOT EXISTS tabla_amigos(
        nro_orden INT NOT NULL AUTO_INCREMENT,
        amigo_nombre VARCHAR(25) NOT NULL,
        amigo_apellido VARCHAR(25) NOT NULL, 
        amigo_telefono BIGINT NOT NULL,  
        amigo_email VARCHAR (40),
        PRIMARY KEY (nro_orden)
    );
`;

const pool = createPool({
    host: configuracion.HOST,
    port: configuracion.DB_PORT,
    user: configuracion.USER,
    password: configuracion.PASSWORD,
    database: configuracion.NAME
});

await pool.query (CREAR_TABLA);

console.log ("CONEXIÓN A BASE DE DATOS INICIADA");

export default pool;