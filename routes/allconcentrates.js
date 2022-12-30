var express = require('express');
const { db } = require('../flower');
var router = express.Router();

const concUnits = [];
const Flower = require("../flower");
const Concentrate = require("../concentrates");


/* GET home page. */
router.get('/', function(req, res, next) {

  const data = Concentrate.find({}, (err, cursor) => {
    concUnits.splice(0);
    cursor.forEach((dataset) => {
    concUnits.push(dataset)
    })
    res.render('concentrates', { 
    product: concUnits})
  })
})

module.exports = router;
