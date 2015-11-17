var ToDo = require('../models/toDo.js')

function index(req,res) {
  ToDo.find({}, function(err, toDos) {
    if(err) res.send(err)
    res.json(toDos)
  })
}

function create(req, res) {
  var toDo = new ToDo(req.body.toDo)

  toDo.save(function(err) {
    if (err) res.send(err)
    res.json({success: true, message: 'To do item added!'})
  })
}


// Action to show a single to do.
function show(req, res) {
	ToDo.findById(req.params.id, function(err,toDo){
		if (err) console.log(err)
		res.json(toDo)
	})
}

// Action to edit a single to do.
function update(req, res) {
	ToDo.findOneAndUpdate({_id: req.params.id}, req.body.toDo, {new: true}, function(err, user) {
		if (err) console.log(err)
		res.json(user)
	})
}

// Action to delete a single to do.
function destroy(req, res) {
 ToDo.findOneAndRemove({_id: req.params.id}, function(err) {
	 if(err) console.log(err)
	 res.json({success: true, message: 'deleted toDo'})
   res.redirect('/')
 })
}

module.exports = {
  indexToDos: index,
  createToDo: create,
	showToDo: show,
	updateToDo: update,
	destroyToDo: destroy
}
