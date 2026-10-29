// capa de servivios para manejar la logica de negocio de las tareas

const HttpError = require("../utils/httpError");


// base de datos local de tareas

let tareas = [
    {
        id: 1,
        titulo: "Tarea 1",
        descripcion: "Tarea de desarrollo web",
        completada: false
        },
    {
        id: 2,
        titulo: "Tarea 2",
        descripcion: "Tarea de compleja",
        completada: false
    },

    {
        id: 3,
        titulo: "Tarea 3",
        descripcion: "tarea de analisis real",
        completada: false
    }
]

let idSiguiente = 4;

function listar(){
    return tareas;
}

function obtener(id){
    const tarea = tareas.find(tarea => tarea.id === id);
    if(!tarea){
        throw new HttpError(404, `no existe la tarea con id ${id}`);
    }
    return tarea;
}

//crear una nueva tarea

function crear(tarea){
    const nuevaTarea = {
        id: idSiguiente++,
        titulo: tarea.titulo,
        completada: false
    };
    tareas.push(nuevaTarea);
    return nuevaTarea;
}

function actualizar(id, cambios){
    const tarea = obtener(id);
    Object.assign(tarea, cambios);
    return tarea;
}

function eliminar(id){
    obtener(id);
    tareas = tareas.filter(tarea => tarea.id !== id);
}

module.exports = {
    listar,
    obtener,
    crear,
    actualizar,
    eliminar
};




