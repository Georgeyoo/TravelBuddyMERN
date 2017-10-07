const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Locations = require("./models/locations");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

var link = 'mongodb://heroku_5m0cnwwj:b69khihkp8sudn1hk8badffifc@ds111535.mlab.com:11535/heroku_5m0cnwwj';
// var link = 'mongodb://heroku_5m0cnwwj:b69khihkp8sudn1hk8badffifc@ds111535.mlab.com';
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

app.get('/api/read', function(req, res) {

  Locations.findAll({})
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

app.listen(PORT, () => console.log("Listening on port: " + PORT));