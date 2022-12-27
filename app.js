var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/form');

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
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://dispensary:dispensarypassword@dispensary.gd0egr1.mongodb.net/?retryWrites=true&w=majority')

const flower = require('./flower');
const concentrate = require('./concentrates')




const run = async (err) => {

  try {
const OGKush = await concentrate.create({ 
  strainName: 'Blue Dream',
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
console.log(OGKush)
runConcentrates();}
catch (err) {
  console.log(err.message)
}
}

const runConcentrates = async (err) => {
  try {
  const OGBudder = await new concentrate.create({
    strainName: 'OG Kush Budder',
    classification: 'Indica',
    consistency: 'Budder',
    cannabanoids: {
      THC:80,
      CBD:1
    },
    SKU: 0001,
    topTerpenes: ['Myrcene', 'Limonene' ],
    price: 60,
    stock: 5,
    // similarTo: mongoose.SchemaTypes.ObjectId
  })
console.log(OGBudder)
}
  catch (err) {
    console.log(err.message);
  }
}
run()

module.exports = app;
