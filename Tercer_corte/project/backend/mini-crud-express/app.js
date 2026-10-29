/* hola*/

// configurar mi express, para qdar un orden a cada peticion

const express = require("express");
const app = express();
const tareasRouter = require("./src/routes/tareas.routes");
// convertir el cuerpo de la petidion  req.body en un objeto json

app.use(express.json());

//rutas

app.get("/api/salud", (req, res) => {
    res.json({estado:"ok"});

});

app.use("/api/tareas", tareasRouter);




module.exports = app;