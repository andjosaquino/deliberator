
/**
 * Satellizer Node.js Example
 * (c) 2015 Sahat Yalkabov
 * License: MIT
 */

var colors = require('colors');
var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var authentication = require('./authentication');

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function(err) {
  	console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

var app = express();
app.set('port', process.env.PORT || 8000);
app.use(authentication);

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(app.get('port'), function() {
  	console.log(('Express server listening on port ' + app.get('port')).green);
});


