var
  toDosController = require("../controllers/toDosController.js")
  ,express        = require("express")
  ,toDoRoutes     = express.Router()

toDoRoutes.route("/")
  .get(toDosController.indexToDos)
  .post(toDosController.createToDo)

toDoRoutes.route("/:id")
  .get(toDosController.showToDo)
  .put(toDosController.updateToDo)
  .delete(toDosController.destroyToDo)

module.exports = toDoRoutes
