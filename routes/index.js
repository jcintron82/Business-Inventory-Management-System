var express = require('express');
const { db } = require('../flower');
var router = express.Router();


const Flower = require("../flower");
const Concentrate = require("../schemas/drinks");


/* GET home page. */
router.get('/home', function(req, res, next) {

  // const data = Concentrate.find({}, (err, cursor) => {
  //   dataFloat = '';
  //   cursor.forEach((dataset) => {
  //   console.log(dataset);
  //   dataFloat = dataset;
  //   })
    res.render('index', { 
    title: 'dataFloat.strainName',
     })
  })
// })

module.exports = router;
