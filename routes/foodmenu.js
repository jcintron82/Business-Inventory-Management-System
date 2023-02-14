var express = require('express');
var router = express.Router();

const appetizers = [];
const entrees = [];
const dessertarr = [];

const appetizerschema = require("../schemas/appetizers");
const desserts = require('../schemas/desserts');
const DessertSchema = require('../schemas/desserts');
const EntreeSchema = require("../schemas/entrees");

/* GET home page. */
router.get('/', function(req, res, next) {

  appetizerschema.find({}, (err, cursor) => {
    appetizers.splice(0);
    cursor.forEach((dataset) => {
      appetizers.push(dataset);
    });
  });

  EntreeSchema.find({}, (err, cursor) => {
    entrees.splice(0);
    cursor.forEach((dataset) => {
      entrees.push(dataset);
   });
  });
    DessertSchema.find({}, (err, cursor) => {
      dessertarr.splice(0);
      cursor.forEach((dataset) => {
        dessertarr.push(dataset);
      });
    });
    res.render('foodmenu', { 
    appetizers: appetizers,
    entrees: entrees,
    dessertarr: dessertarr,
  });
  location.reload();
  });
module.exports = router;
