var express = require('express');
const passport = require('passport');
var usersRouter = express.Router();
var User = require('../models/users');
const auth = require('./auth');


usersRouter.use(express.json());
usersRouter.get('/', auth.verifyUser || auth.verifyAdmin, (req, res, next) => {
  User.find({})
    .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
});

usersRouter.delete('/', (req, res, next) => {
  User.remove({})
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

usersRouter.post('/signup', (req, res) => {
  User.register(new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    address: req.body.address,

  }),
    req.body.password, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      }
      else {
        passport.authenticate('user-local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: 'Registration Successful!' });
        });
      }
    });
});


module.exports = usersRouter;
