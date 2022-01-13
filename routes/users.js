var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

var func = require('./mongo.js');
var funcoun = require('./mongo2.js');
var client = require('../database');
var countt = require('../public/javascripts/populate');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var coll = "Vice City";
var start, stop;
var count = [];
var a = [];
var temp, b;

router.get("/index2", function(req, res, next) {
 // console.log(variabled);
 console.log("myColl = ",coll);

  (async function() {
    //  count = await client.db('metro4').collection(coll).countDocuments({});
      count = await funcoun(coll);
      console.log("count ",count);
  
      res.render("index2", {title: 'some data', userdataa: a, imgsrc : coll, coun : count});
      a = [];
      //coll = "Station"; 
    }) ();
});

router.post("/details", function(req, res, next) {
  coll = req.body.selectpicker;

  coll = String(coll);

  console.log("coll = ",coll);
  res.redirect("/users/index2");

})


router.post("/query", function(req, res, next) {
  start = req.body.selectpicker1;
  stop = req.body.selectpicker2;

  start = String(start);         // a very big bug with toString()
  stop = String(stop);

  console.log("from",start," to", stop, "in", coll);

  (async function() {
    console.log("Reached");
    b = await client.db('city').collection(coll).findOne({"_id":1});
    console.log(b);
    a = await func(start, stop, coll);
    console.log(a);
    
    res.redirect("/users/index2");
  })();
})

module.exports = router;
