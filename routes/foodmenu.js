var express = require('express');
const { db } = require('../schemas/food');
var router = express.Router();

const units = [];
const food = require("../schemas/food");


/* GET home page. */
router.get('/', function(req, res, next) {

  const data = food.find({}, (err, cursor) => {
    units.splice(0);
    cursor.forEach((dataset) => {
        units.push(dataset)
    })
    res.render('foodmenu', { 
    product: units})
  })
})

module.exports = router;
