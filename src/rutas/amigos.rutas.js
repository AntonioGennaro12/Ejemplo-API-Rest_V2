import { Router } from "express";
import pool from "../conexionDB.js";
import * as controladores from "../controladores/amigos.controladores.js";

const ruta = Router();

ruta.get("/", controladores.obtenerAmigos);
ruta.get("/:id", controladores.obtenerAmigo);
ruta.post("/", controladores.crearAmigo);
ruta.put("/:id", controladores.actualizarAmigo);
ruta.delete("/:id", controladores.eliminarAmigo);

export default ruta;

