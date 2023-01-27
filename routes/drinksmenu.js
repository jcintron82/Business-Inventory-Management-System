var express = require('express');
const { db } = require('../flower');
var router = express.Router();

const concUnits = [];
const Flower = require("../flower");
const drinks = require("../schemas/drinks");


/* GET home page. */
router.get('/', function(req, res, next) {

  const data = drinks.find({}, (err, cursor) => {
    concUnits.splice(0);
    cursor.forEach((dataset) => {
    concUnits.push(dataset)
    })
    res.render('drinksmenu', { 
    product: concUnits})
  })
})

module.exports = router;
