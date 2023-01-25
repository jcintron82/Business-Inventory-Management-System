var createError = require('http-errors');
var express = require('express');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const User = require("./schemas/newuserschema");




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/form');
var concentratesRouter = require('./routes/allconcentrates.js');
var loginPageRouter = require('./routes/loginpage.js');
var registerPageRouter = require('./routes/registerpage');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/form', usersRouter);
app.use('/concentrates', concentratesRouter);
app.use('/loginpage', loginPageRouter);
app.use('/register', registerPageRouter);

//Note to self - At this point the console.logs shows that the user is being retrieved by the
//strategy in app.js but for some reason isnt posting to /login
//Passport Middleware Functions
passport.use(
  new LocalStrategy(( username, password, done) => {

    User.findOne({ username: username }, (err, user) => {
      console.log(user)
      console.log('app.js - Username is: ' )
      if (err) { 
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  })
);

// passport.serializeUser(function(user, done) {
//   done(null, user.username);
// });
// passport.deserializeUser(function(username, done) {
//   User.findById(username, function(err, username) {
//     done(err, username);
//     console.log('ok')
//   });
  
// });

passport.serializeUser(function(user, done) {
  console.log('Serialized' + user)
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  User.find({username: user.username }, function(err, user) {
    done(null, user);
    console.log('Deserialized:' + user)
  });
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.post(
  "/loginpage",
  passport.authenticate("local", {
    successRedirect: "/form",
    failureRedirect: "/loginpage",
  }),
);

app.use(function (req, res, next) {
  console.log(res.locals.currentUser)
  res.locals.currentUser = req.user
  next()
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, () => {
  console.log('Running on Port 5000...')
})

//Middleare for browser live reload
// var livereload = require("livereload");
// var connectLiveReload = require("connect-livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });
// app.use(connectLiveReload());

const mongoose=require('mongoose');
const { unwatchFile } = require('fs');
mongoose.connect('mongodb+srv://dispensary:dispensarypassword@dispensary.gd0egr1.mongodb.net/?retryWrites=true&w=majority');


module.exports = app;

