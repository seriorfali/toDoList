var
  express     = require("express")
  ,app        = express()
  ,ejs        = require("ejs")
  ,ejsLayouts = require("express-ejs-layouts")

// App configurations.
app.set("view engine", "ejs")

// Middleware.
app.use(ejsLayouts)
