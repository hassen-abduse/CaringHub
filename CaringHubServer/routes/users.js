var express = require('express');
const passport = require('passport');
var usersRouter = express.Router();
var User = require('../models/users');
const auth = require('./auth');


usersRouter.use(express.json());

usersRouter.post('/register', (req, res) => {
  // Register a User
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

usersRouter.put('/:userId', (req, res) => {
  // Update a User's Account
  User.findByIdAndUpdate(req.params.userId, {
    $set: req.body
}, { new: true })
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
});

usersRouter.delete('/:userId', (req, res) => {
  // Delete a User's Account
  User.findByIdAndRemove(req.params.userId)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});


module.exports = usersRouter;
