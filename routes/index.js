
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to Express Node Js / Angular JS with Mongo DB application ' });
};