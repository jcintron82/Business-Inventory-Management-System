var express = require('express');
const { db } = require('../flower');
var router = express.Router();


const Flower = require("../flower");
const Concentrate = require("../concentrates");


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
    classification: dataFloat.classification })
  })
// })

module.exports = router;
