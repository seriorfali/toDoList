var mongoose = require('mongoose')

///////////////////MONGOOSE SCHEMA//////////////////////
var toDoSchema = new mongoose.Schema({
  title: {type: String, require: true, unique: true},
  body: String,
  priority: Number /*will be 1 (high) 2 (medium) 3(low)*/
})
///////////////////MONGOOSE SCHEMA/////////////////////////

var toDo = mongoose.model('toDo', gottaDoSchema)

//////////////////////EXPORTS///////////////////////////////
module.exports  = toDo
//////////////////////EXPORTS///////////////////////////////
