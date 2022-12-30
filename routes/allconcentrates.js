var express = require('express');
var router = express.Router();

const units = [];
const Flower = require("../flower");
const Concentrate = require("../concentrates");


/* GET home page. */
router.get('/', function(req, res, next) {

  const data = Concentrate.find({}, (err, cursor) => {
    units.splice(0)
    cursor.forEach((dataset) => {
    units.push(dataset)
    console.log(units)
    })
    res.render('concentrates', { 
    title: units })
  })
})

module.exports = router;
