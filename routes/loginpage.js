var express = require('express');
var router = express.Router();

managerIDs = [1,2];

/* GET login page. */
router.get('/', function(req, res, next) {
  const x = res.locals.currentUser
  console.log('loginpage.js - Username is: ' + res.currentUser)
  console.log(x)
    res.render('loginpage', { 
    user: req.user
    
     });

   console.log('loginpage.js - Username is: ' + res.currentUser)
      return
  })

  
module.exports = router;
