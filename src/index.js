import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";
import amigosRutas from "./rutas/amigos.rutas.js";
import configuracion from "./configuracion.js";

const app = express();

app.use(express.json());
app.use(cors()); // se debería diseñar el control de la API con una key/contraseña, etc...

app.use(amigosRutas);

// URL: desde el navegador local
// http://localhost:5000/api?param=false&param2=%22otrovalor%22

app.listen(configuracion.PORT, ()=>{
    console.log("Servidor esta activo", configuracion.PORT );
});

app.use((req, res)=>{
    res.send("<h1> ERROR: es una ruta que no existe</h1>")
}); 

