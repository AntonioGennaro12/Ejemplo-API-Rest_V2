import app from "./apps.js";
import configuracion from "./configuracion.js";

app.listen(configuracion.PORT, ()=>{
    console.log("Servidor esta activo", configuracion.PORT );
});



