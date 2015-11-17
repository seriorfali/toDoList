var ToDo = require('../models/toDo.js')


function index(req,res){
  ToDo.find({}, function(err,toDos){
    if(err) throw err;
    res.json(toDos)
  });
}

function create(req, res){
  var toDo = new ToDo(req.body.toDo)

  toDo.save(function(err){
    if (err) console.log(err)
    res.json({success: true, message: 'toDo created!'})
  })
}


//create action to show a single ToDo
function show(req, res) {
	ToDo.find({_id: req.params.id}, function(err,toDo){
		if (err) console.log(err)
		res.json(toDo)
	})
}

//create action to edit a single user
function update(req, res) {
	ToDo.findOneAndUpdate({_id: req.params.id}, {age: req.body.age}, function(err,user){
		if (err) console.log(err)
		res.json(user)

	})
}

//create action to delete a single user
function destroy(req, res) {
 ToDo.remove({_id: req.params.id}, function(err) {
	 if(err) console.log(err)
	 res.json({success: true, message: 'deleted toDo'})
 })
}


module.exports = {
  alltoDos: index
  createtoDo: create
	showtoDo: show,
	updatetoDo: update,
	destroytoDo: destroy
}
