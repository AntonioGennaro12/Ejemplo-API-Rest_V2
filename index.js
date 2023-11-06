import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";


const app = express();

app.use(express.json());
app.use(cors()); // se debería diseñar el control de la API con una key/contraseña, etc...

app.get("/", async (req, res)=>{
    try {
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos"); // WHERE nro_orden = 1 ");
    console.log("El resultado: "+resultado);
    res.json(resultado);
    } catch (error) {
        res.status(500).json({
            informe: "Algo salio mal",
            error: error
        })
    }
}); 

app.get("/mi-api/",(req, res)=>{
    console.log(req.query);
    res.send(`<h1> Hola 22 ${req.query.param2}</h1>`)
}); 

app.get("/mi-api/:id", async (req, res)=>{
    console.log(req.params);
    const [resultado] = await pool.query("SELECT * FROM tabla_amigos WHERE nro_orden = ? ", req.params.id); 
    res.json(resultado);
}); 

app.post("/mi-api",(req, res)=>{
    console.log(req.body);
    // debería crear algo en la base de datos
    res.status(201).json(req.body.info2);
})

app.post("/mi-api/:nombre",(req, res)=>{
    // crea pidiendo info en la url
    res.status(201).send(`<h2> ${req.params.nombre}</h2>`);
})

app.put("/mi-api",(req, res)=>{
    // debería crear algo en la base de datos
    res.json({
    mensaje: "PUT todo OK" 
    });
})

app.delete("/mi-api",(req, res)=>{
    // debería crear algo en la base de datos
    res.json({
    mensaje: "DELETE tooodo OK" 
    });
})

// URL: desde el navegador local
// http://localhost:5000/api?param=false&param2=%22otrovalor%22

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Servidor esta activo", process.env.PORT || 5000);
});

app.use((req, res)=>{
    res.send("<h1> ERROR: es una ruta que no existe</h1>")
}); 

