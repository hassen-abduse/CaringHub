var express = require('express');
const passport = require('passport');
var usersRouter = express.Router();
var User = require('../models/users');


usersRouter.use(express.json());

usersRouter.route('/')
  .post((req, res, next) => {
    User.register(new User({ username: req.body.username }),
      req.body.password, (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err: err });
        }
        else {
          user.firstName = req.body.firstName;
          user.lastName = req.body.lastName;
          user.address = req.body.address;
          user.save((err, user) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({ err: err });
              return;
            }
            passport.authenticate('User-Local')(req, res, () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({ success: true, status: 'Registration Successful!' });
            });
          });
        }
      });
  });


module.exports = usersRouter;
