var mongoose = require( 'mongoose' );
//var dbURI = 'mongodb://localhost/employeedb';
var dbURI = 'mongodb://pankaj2935:node2017@ds121171.mlab.com:21171/employees';
mongoose.connect(dbURI, function(err) {
	if (err) {
		console.log('connection error', err);
    console.log('dbURI is: '+dbURI);
	} else {
		console.log('connection successful');
	}
});


var employeeSchema = new mongoose.Schema({
	Name : String,
	Email: String,
	Date_of_birth: Date,
	Department: String,
	Gender: String,
	Age: ({ $subtract: [ new Date(), "$Date_of_birth" ] })/(365*24*60*60*1000)
});
mongoose.model("Employee",employeeSchema);
