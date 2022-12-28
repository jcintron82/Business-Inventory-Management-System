var express = require('express');
var router = express.Router();
const float = require('../app.js');
const arr = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Form' });
  // res.send('AHHHH')
  if(err) throw err
});

console.log('this worls')
router.post('/', (req, res) => {
   const strain = req.body.strain;
   arr.push({
     x: strain,
   })
   console.log(arr)
   run(null ,strain);
   res.redirect('./home')
 })

 const flower = require('../flower');
 const concentrate = require('../concentrates')
 
 
 
 
 const run = async (err, strain) => {
 
   try {
 const OGKush = await concentrate.create({ 
   strainName: strain,
   classification: 'Indica',
   consistency: 'Budder',
   cannabanoids: {
     THC:20,
     CBD:5
   },
   SKU: 001,
   topTerpenes: ['Myrcene', 'Limonene' ],
   price: 35,
   stock: 5,
   // similarTo: mongoose.SchemaTypes.ObjectId
 }
 ) 
 console.log(OGKush)}
 catch (err) {
   console.log(err.message)
 }
 }
 run()
module.exports = router;
