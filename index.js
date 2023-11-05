import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); // se debería diseñar el control de la API con una key/contraseña, etc...

app.get("/",(req, res)=>{
    console.log(req.query);
    res.send(`<h1> Hola 1 </h1>`)
}); 

app.get("/mi-api/",(req, res)=>{
    console.log(req.query);
    res.send(`<h1> Hola 2 ${req.query.param2}</h1>`)
}); 

app.get("/mi-api/:id",(req, res)=>{
    console.log(req.params);
    res.send("<h1> Hola 3 </h1>")
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

