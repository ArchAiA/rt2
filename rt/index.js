const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.get('/', function(req, res) {
	res.send("Hello World");
});



//DB Setup
var db = mongoose.connect('mongodb://david:davidpw@ds117485.mlab.com:17485/rt', {useMongoClient: true,});

const rt = require('./models/rt');




app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});