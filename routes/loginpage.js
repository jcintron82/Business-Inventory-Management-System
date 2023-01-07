var express = require('express');
var router = express.Router();
const newUser = require("../schemas/newuserschema");

managerIDs = [1,2];

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('loginpage', { 
    login: 'Name'
    
     });
     console.log(req.user.userna)
     
  })

//Everything below is to register
router.post('/', (req, res, next) => {
  const username = req.body.newusername;
  const password = req.body.newpassword;
  // const managerID = req.body.managerid;
  // const id = logins.find({ managerID: managerID }, (err, cursor) => {
  //   if(err) throw err;
  //   managerIDs.forEach(() => {
      
  //   })
      postNewUser(username, password)
      res.redirect('/loginpage')
  })

const postNewUser = async (
  username,
  password,
) => {
  try {
    await newUser.create({
      username: username, 
      password: password,
    })
  }
  catch (err) {
    console.log(err)
  }

}
module.exports = router;
