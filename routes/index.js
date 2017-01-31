'use strict';

const router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function (req, res, next) {
  var p1 = Hotel.findAll();
  var p2 = Restaurant.findAll();
  var p3 = Activity.findAll();
  Promise.all([p1, p2, p3])
  .then(function(results){
    res.render('index', {Hotel: results[0], Restaurant: results[1], Activity: results[2]})
  })
  .catch(next);
});

module.exports = router;



