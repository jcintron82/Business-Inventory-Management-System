var express = require('express');
var router = express.Router();

managerIDs = [1,2];


/* GET login page. */
router.get('/', function(req, res, next) {
  const x = res.locals.currentUser
    res.render('loginpage', { 
    login: x
    
     });

   console.log('loginpage.js - Username is: ' + res.locals.currentUser)
     
  })
module.exports = router;
