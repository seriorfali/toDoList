var mongoose = require('mongoose')

// Mongoose schema for ToDo model.
var toDoSchema = new mongoose.Schema({
  title: {type: String, require: true, unique: true},
  body: String,
  priority: Number,/*will be 1 (high) 2 (medium) 3(low)*/
  done: Boolean
})

// Declare ToDo model.
var ToDo = mongoose.model('ToDo', toDoSchema)

// Export ToDo model.
module.exports = ToDo
