// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var conne

// Creates an instance of "express server"
var app = express();
var PORT = process.env.PORT || 3000;

//connection
var connection = require('./config/connection.js')

// Incorporate body-parser middleware
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json

// Routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})