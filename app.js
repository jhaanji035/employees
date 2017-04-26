
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  ,db=require('./models/db.js');


var employee=require('./routes/employee.js');

var bodyParser=require('body-parser');

var app = express();


// all environments
app.set('port', process.env.PORT || 8080);
//app.set('port', 27017);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/employee', employee.getAllEmployees);
app.post('/employee', employee.createEmployee);
app.get('/employee/:id', employee.getEmployee);
app.delete('/employee/:id',employee.delteEmployee);
app.put('/employee/:id', employee.updateEmployee);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
