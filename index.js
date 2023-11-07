import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";


const app = express();

app.use(express.json());
app.use(cors()); // se debería diseñar el control de la API con una key/contraseña, etc...

app.get("/", async (req, res)=>{
    try {
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos"); // WHERE nro_orden = 1 ");
    console.log("El resultado es: "+resultado);
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
    console.log(req.body);
    const { nombre, apellido, telefono, email } = req.body;
    try {
        await pool.query('INSERT INTO tabla_amigos (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)', [nombre, apellido, telefono, email]);
        res.status(201).json({ mensaje: 'Elemento agregado con éxito.' });
    } catch (error) {
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

