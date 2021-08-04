var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var passport = require('passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const dbUrl = config.mongoUrl;
const connect = mongoose.connect(dbUrl);

connect.then((db) => {
  console.log('Succesfully Connected to the DB Server.');
}, (err) => console.log(err));

require("./routes/auth");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/login', (req, res, next) => {
  passport.authenticate(['user-local', 'vol-local', 'org-local'], (err, user, info) => {
    var error = err || info;
    if (error) return res.json(401, error);
    req.logIn(user, (err) => {
      if (err) return res.send(err);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: true, status: 'Login Success!' });
    });
  })(req, res, next);
});

app.get('/logout', (req, res, next) => {
  
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
