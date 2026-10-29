// capa de rutas: metodo + url -> controlador


const {Router} = require("express");
const controladorTareas = require("../controllers/tareas.controller");

const router = Router();

//xd

router.get("/", controladorTareas.listar);
router.get("/:id", controladorTareas.obtener);
router.post("/", controladorTareas.crear);
router.put("/:id", controladorTareas.actualizar);
router.delete("/:id", controladorTareas.eliminar);

module.exports = router;