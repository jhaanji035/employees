var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
// Get all the records
exports.getAllEmployees = function(req, res) {
	Employee.find(function(err, employees) {
		res.json(employees);
		console.log(employees);
	});
};
// Insert record
exports.createEmployee = function(req, res) {
	Employee.create(req.body, function (err, post) {		
		 res.json("Inserted successfully");
	});
};
// Get record
exports.getEmployee = function(req, res) {
	Employee.findById(req.params.id, function (err, post) {
	   res.json(post);
    });
};
// Delete
exports.delteEmployee = function(req, res) {
	Employee.findByIdAndRemove(req.params.id,function (err, post) {
	   res.json("Deleted successfully");
	});
};
// Update
exports.updateEmployee = function(req, res) {
	Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	    res.json("Updated successfully");
	});
};
