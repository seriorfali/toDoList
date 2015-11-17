var mongoose = require('mongoose')

///////////////////MONGOOSE SCHEMA//////////////////////
var gottaDoSchema = new mongoose.Schema({
  title: {type: String, require: true, unique: true},
  body: String
})
///////////////////MONGOOSE SCHEMA/////////////////////////

var GottaDo = mongoose.model('GottaDo', gottaDoSchema)

//////////////////////EXPORTS///////////////////////////////
module.exports  = GottaDo
//////////////////////EXPORTS///////////////////////////////
