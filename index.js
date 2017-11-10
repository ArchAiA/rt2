const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const rtDocs = require('./models/rtDocs');

//DB Setup
var db = mongoose.connect('mongodb://david:davidpw@ds117485.mlab.com:17485/rt', {useMongoClient: true,});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connection Open");

});

//Routes
app.get('/', function(req, res) {
	res.send("Hello World");
});

app.get('/nprm', function (req, res) {
  rtDocs.find(function(err, nprm) {
    res.send(rtDocs);
  });
});





app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});