//node is a very powerful backend - he does not recommend PHP to be used as a backend
//require is a function that takes a parameter
//it is a global function courtesy of node
//can require nodeo modules or your own modules
//to use a const instead of a var for express make sure your npm version is greater than 8 or updated to newest version.
//do not look for console statements in the browser. Browsers only deal with front end.
//express is a function, when you run it, it will initialize your app
//if there is no path ('no_path') it's a node module if it has a path it's a user made module ('./user_made_module')
//installing nodemon allows your server to reload automatically, run nodemon -v to see if it is installed
//this is backend because it's a server
var express = require('express');
var app = express();
//process.env.port says to look for variable port and if it doesn't find it use default port 5353
//PORT can be anything like pepe
//it is later called with the name in command prompt 
//to change port write this at command prompt -> PORT = 888 nodemon server.js
var port = process.env.PORT || 4343;
const database = require('./database');

//run this code before the routes
//it is the middleware in order to communicate with the browser headers
//use is a method that comes from express server and it is a middleware
//it sets the headers and tells express that it has to run this before each run
//purpose of this is to enable cross domain requests
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4343');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//import the function from routes
//because it's a function you can literally call it and pass the parameters
require('./routes')(app, database);
 

app.listen(port, function(err){
    if(err)console.log('error ', err);

    console.log("Server listening on port " + port);
});