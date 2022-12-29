var express = require('express');
const { db } = require('../flower');
var router = express.Router();

const Flower = require("../flower");
const Concentrate = require("../concentrates");


// const data = db.collection('concentrates').find()
const dataFunc = () => {
  const data = Concentrate.find({}, (err, cursor) => {
    if (err) throw err;
    cursor.forEach(dataset => console.log(dataset.strainName))
  })
}

/* GET home page. */
router.get('/home', function(req, res, next) {

  const units = [];
  dataFunc()
  res.render('index', { title: units[0] })

});

module.exports = router;
