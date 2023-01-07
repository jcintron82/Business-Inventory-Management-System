var express = require('express');
var router = express.Router();

managerIDs = [1,2];


/* GET login page. */
router.get('/', function(req, res, next) {
  const x = req.user
    res.render('loginpage', { 
    login: x
    
     });

   console.log('loginpage.js - Username is: ' + req.user)
     
  })
module.exports = router;
