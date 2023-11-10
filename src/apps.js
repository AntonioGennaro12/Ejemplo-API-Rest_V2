import express from "express";
import cors from "cors";
import amigosRutas from "./rutas/amigos.rutas.js";

const app = express();

app.use(express.json());
app.use(cors()); // se debería diseñar el control de la API con una key/contraseña, etc...

app.use("/amigos/", amigosRutas);

app.use((req, res)=>{
    res.send("<h1> ERROR: es una ruta que no existe</h1>")
}); 

export default app;