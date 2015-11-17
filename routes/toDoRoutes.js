var
  toDosController = require("../controllers/toDosController.js")
  ,express   = express()
  ,toDoRoutes = express.Router()

toDoRoutes.route("/")
  .get(toDosController.index)
  .post(toDosController.create)

toDoRoutes.route("/:id")
  .get(toDosController.show)
  .put(toDosController.update)
  .delete(toDosController.destroy)

module.exports = toDoRoutes
