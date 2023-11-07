import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";


const app = express();

app.use(express.json());
app.use(cors()); // se debería diseñar el control de la API con una key/contraseña, etc...

app.get("/", async (req, res)=>{
    try {
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos"); // WHERE nro_orden = 1 ");
    console.table("El resultado del GET 'vacío' es: ");
    console.table(resultado);
    res.json(resultado);
    } catch (error) {
        res.status(500).json({
            informe: "Algo salio mal Get 1",
            error: error
        });
    };
}); 

app.get("/mi-api/",(req, res)=>{
    try{
    console.log(req.query);
    res.send(`<h1> Hola 22 ${req.query.param2}</h1>`)
    } catch (error) {
        res.status(500).json({
        informe: "Algo salio mal Get 2",
        error: error
        });
    };
}); 

app.get("/mi-api/:id", async (req, res)=>{
    try {
    console.log(req.params);
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos WHERE nro_orden = ? ", req.params.id); 
    res.json(resultado);
    } catch (error) {
    res.status(500).json({
        informe: "Algo salio mal Get 3",
        error: error
        });
    };
}); 

app.post("/mi-api", async(req, res)=>{
    console.log("LLegó el POST: "+req.body);
    const { nombre, apellido, telefono, email } = req.body;
    try {
        await pool.query('INSERT INTO tabla_amigos (amigo_nombre, amigo_apellido, amigo_telefono, amigo_email) VALUES (?, ?, ?, ?)', 
                                        [nombre, apellido, telefono, email]);
        res.status(201).json({ mensaje: 'Elemento agregado con éxito.' });
    } catch (error) {
        console.log("Falló el try, entró al ERROR 500");
        res.status(500).json({
        informe: "Error al agregar elemento en tabla_amigos",

        error: error
        });
    };
});

app.post("/mi-api/:nombre",(req, res)=>{
    try {
    // crea pidiendo info en la url
    res.status(201).send(`<h2> ${req.params.nombre}</h2>`);
    } catch (error) {
        res.status(500).json({
        informe: "Algo salio mal Post 2",
        error: error
        });
    };
});

app.put("/mi-api",(req, res)=>{
    try {
    // debería crear algo en la base de datos
    res.json({
    mensaje: "PUT todo OK" 
    });
    } catch (error) {
        res.status(500).json({
        informe: "Algo salio mal Put",
        error: error
        });
    };
});

app.delete("/mi-api",(req, res)=>{
    try {
    // debería crear algo en la base de datos
    res.json({
    mensaje: "DELETE tooodo OK" 
    });
    } catch (error) {
        res.status(500).json({
        informe: "Algo salio mal Delete",
        error: error
        })
    };
})

// URL: desde el navegador local
// http://localhost:5000/api?param=false&param2=%22otrovalor%22

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Servidor esta activo", process.env.PORT || 5000);
});

app.use((req, res)=>{
    res.send("<h1> ERROR: es una ruta que no existe</h1>")
}); 


/*** 

// routes.js
const express = require('express');
const router = express.Router();
const pool = require('./conexionDB');

// Ruta para obtener todos los elementos
router.get('/elementos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM elementos');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener elementos.' });
    }
});

// Ruta para agregar un nuevo elemento
router.post('/elementos', async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        await pool.query('INSERT INTO elementos (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
        res.status(201).json({ mensaje: 'Elemento agregado con éxito.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el elemento.' });
    }
});

// Ruta para actualizar un elemento
router.put('/elementos/:id', async (req, res) => {
    const { nombre, descripcion } = req.body;
    const elementoId = req.params.id;
    try {
        await pool.query('UPDATE elementos SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, elementoId]);
        res.json({ mensaje: 'Elemento actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el elemento.' });
    }
});

// Ruta para borrar un elemento
router.delete('/elementos/:id', async (req, res) => {
    const elementoId = req.params.id;
    try {
        await pool.query('DELETE FROM elementos WHERE id = ?', [elementoId]);
        res.json({ mensaje: 'Elemento eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el elemento.' });
    }
});

module.exports = router;


 */
