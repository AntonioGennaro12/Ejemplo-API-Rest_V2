import { Router } from "express";
import pool from "../conexionDB.js";

const ruta = Router();

ruta.get("/mi-api/", async (req, res)=>{
    try {
    console.log("Esto es lo que llegó como req en GET all:");
    console.log(req.query);
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos"); 
    console.table("El resultado del 'GET all' es: ");
    console.table(resultado);
    res.json(resultado);
    } catch (error) {
        console.log("Error (500) en GET All: "+error);
        res.status(500).json({
            informe: "Algo salio mal Get all",
            error: error
        });
    };
}); 

ruta.get("/mi-api/:id", async (req, res)=>{
    try {
    let item = req.params.id;
    console.log("Esto es lo que llegó como GET Id:");
    console.log(req.params);
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos WHERE nro_orden = ? ", item); 
    res.json(resultado);
    } catch (error) {
        console.log("Error (500) en GET Id:"+item+", "+error);
        res.status(500).json({
        informe: "Algo salio mal Get 3",
        error: error
        });
    };
}); 

ruta.post("/mi-api/", async(req, res)=>{
    console.log("LLegó el POST: "+req.body);
    const { nombre, apellido, telefono, email } = req.body;
    try {
        await pool.query('INSERT INTO tabla_amigos (amigo_nombre, amigo_apellido, amigo_telefono, amigo_email) VALUES (?, ?, ?, ?)', 
                                        [nombre, apellido, telefono, email]);
        res.status(201).json({ mensaje: 'Elemento agregado con éxito.' });
    } catch (error) {
        console.log("Error (500) en POST "+error);
        res.status(500).json({
        informe: "Error al agregar Elemento en tabla_amigos",
        error: error
        });
    };
});

ruta.put("/mi-api/:id", async (req, res)=>{
    console.log("LLegó el PUT: ");
    console.table(req.body);
    const { nombre, apellido, telefono, email } = req.body;
    const orden = req.params.id;
    try {
        console.log("Intentando actualizar un elemento en la base de datos");
        await pool.query('UPDATE tabla_amigos SET amigo_nombre = ?, amigo_apellido = ?, amigo_telefono = ?, amigo_email= ? WHERE nro_orden = ?', 
                        [nombre, apellido, telefono, email, orden]);
        console.log("Elemento actualizado con éxito");
        res.json({ 
            mensaje: 'Elemento actualizado con éxito.'         
    });
    } catch (error) {
        console.log("Error al actualizar Elemento: "+orden+", "+error);
        res.status(500).json({ error: 'Error al actualizar el elemento.' });
    }
});

ruta.delete("/mi-api/:id", async (req, res)=>{
    const item = req.params.id;
    try {
        await pool.query('DELETE FROM tabla_amigos WHERE nro_orden = ?', [item]);
        res.json({ mensaje: 'Elemento:'+item+' eliminado con éxito!' });
    res.json({
    mensaje: "DELETE tooodo OK" 
    });
    } catch (error) {
        console.log("Error al borrar Elemento:"+item+", "+error);
        res.status(500).json({
        informe: "Falló el Delete",
        error: error
        })
    };
})

export default ruta;

