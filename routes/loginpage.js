var express = require('express');
var router = express.Router();
const Login = require("../schemas/loginSchema");
/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('loginpage', { 
    title: 'Hi',
     })
  })

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  postNewUser(username, password)
  res.redirect('/loginpage')

})
const postNewUser = async (
  username,
  password
) => {
  try {
    await Login.create({
      username: username, 
      password: password
    })
  }
  catch (err) {
    console.log(err)
  }

}
module.exports = router;
