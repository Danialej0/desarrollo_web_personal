// capa de controladores. FUnciona como un traducor
// lee http  lee el req llama al servicio y genera un respuesta

const servicioTareas = require("../services/tareas.servive");

function listar(req, res){
    res.status(200).json(servicioTareas.listar());
}

function obtener(req, res){
    const id = Number(req.params.id);
    const tarea = servicioTareas.obtener(id);
    res.status(200).json(tarea);
}

function crear(req, res){
    const nueva = servicioTareas.crear(req.body);
    res.status(201).json(nueva);
}

function actualizar(req, res){
    const id = Number(req.params.id);
    res.status(200).json(servicioTareas.actualizar(id, req.body));
}

function eliminar(req, res){
     const id = Number(req.params.id);
    servicioTareas.eliminar(id);
    res.status(204).send();
}

module.exports = {
    listar,
    obtener,
    crear,
    actualizar,
    eliminar
};




