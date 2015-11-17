var
  express     = require("express")
  ,app        = express()
  ,mongoose   = require("mongoose")
  ,logger     = require("morgan")
  ,bodyParser = require("body-parser")
  ,toDoRoutes = require("./routes/toDoRoutes.js")
  ,port       = process.env.PORT || 3000

// To connect to MongoDB.
mongoose.connect("mongodb://seriorfali:oolpI700#@ds055564.mongolab.com:55564/to_do_spa")

// To log requests made to app in development environment.
app.use(logger("dev"))

// Middleware:
// To set public folder as static assets server.
app.use(express.static("public"))

// Routes:
app.use("/todos", toDoRoutes)

app.listen(port, function() {
  console.log("Server started at port " + port + ".")
})
