const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Locations = require("./models/Locations");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

var link = 'mongodb://heroku_sj0qk73p:po3jeqk814v3hn09dahlqh0jfk@ds113505.mlab.com:13505/heroku_sj0qk73p';
//Local link
// var link = 'mongodb://localhost/locations';

mongoose.connect(link);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

app.get('/api/saved', function(req, res) {

  Locations.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/saved', function(req, res){
  var newLocations = new Locations(req.body);

  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  newLocations.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });
});

app.delete('/api/saved/', function(req, res){

  var url = req.param('url');

  Locations.find({"url": url}).remove().exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

app.listen(port, () => console.log("Listening on port: " + port));