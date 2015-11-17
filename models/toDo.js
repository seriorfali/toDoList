var mongoose = require('mongoose')

///////////////////MONGOOSE SCHEMA//////////////////////
var toDoSchema = new mongoose.Schema({
  title: {type: String, require: true, unique: true},
  body: String,
  priority: Number,/*will be 1 (high) 2 (medium) 3(low)*/
  done: Boolean
})
///////////////////MONGOOSE SCHEMA/////////////////////////

var ToDo = mongoose.model('ToDo', toDoSchema)

//////////////////////EXPORTS///////////////////////////////
module.exports  = ToDo
//////////////////////EXPORTS///////////////////////////////
