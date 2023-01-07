const { json } = require('express');
var express = require('express');
var router = express.Router();
const newUser = require("../schemas/newuserschema");

managerIDs = [1,2];

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('loginpage', { 
    login: req.user
    
     });
     console.log(req.user)
     
  })
module.exports = router;
