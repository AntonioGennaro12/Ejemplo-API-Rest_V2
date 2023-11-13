import express from "express";
import cors from "cors";
import amigosRutas from "./rutas/amigos.rutas.js";
import configuracion from "./configuracion.js";

const app = express();

app.use(express.json());

const urlsPermitidas = [configuracion.URL_PERMIT_1]; 

app.use(cors({
    origin: (origin, callback)=>{
        console.log(origin);
        if(urlsPermitidas.includes(origin) || !origin) {
            callback(null, true);
        }
        else{
            const error = new Error ("No permitido por Cors");
            error.status = 401;
            console.log(origin+"igual lo dejo pasar");
            callback(error, true);
        }
    }
})); 

app.use("/amigos/", amigosRutas);

app.use((req, res)=>{
    res.send("<h1> ERROR: es una ruta que no existe</h1>")
}); 

export default app;