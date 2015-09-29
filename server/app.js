var express = require('express');
var app = express();
var adj = require('./public/assets/data/adjectives.json');
var noun = require('./public/assets/data/nouns.json');

app.use(express.static(__dirname+"/public"));

app.get('/', function (req,res) {
    res.sendFile(__dirname+"/public/views/index.html");
});

app.get('/adj', function (req,res) {
    console.log('sending adjectives');
    res.send(adj);
});

app.get('/noun', function (req,res) {
    console.log('sending nouns');
    res.send(noun);
});

var server = app.listen(3000, function () {
    console.log('Listening to port: ',server.address().port);
});

module.exports = app;

