var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

var func = require('./mongo.js');
var funcoun = require('./mongo2.js');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

var coll = "newDelhi";
var start, stop;
var count = [];
var a = [];

router.get("/index2", function (req, res, next) {

  (async function () {

    count = await funcoun(coll);
    res.render("index2", { title: 'some data', userdataa: a, imgsrc: coll, coun: count });
    a = [];

  })();
});

router.post("/details", function (req, res, next) {
  coll = req.body.selectpicker;
  coll = String(coll);

  res.redirect("/users/index2");

})


router.post("/query", function (req, res, next) {
  start = req.body.selectpicker1;
  stop = req.body.selectpicker2;

  start = String(start);         // a very big bug with toString()
  stop = String(stop);

  (async function () {
    // a = await func(start, stop, coll, () => {
    //   res.redirect("/users/index2");
    // });
    a = await func(start, stop, coll);
    // console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyy",a);
    res.redirect("/users/index2");

  })();
})

module.exports = router;
