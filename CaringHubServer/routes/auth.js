var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');
var Volunteer = require('../models/volunteers');
var Organization = require('../models/organizations');

passport.use('user-local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) return done(err);
            
            if (!user) {
                return done(null, false, {
                    message: 'username not found!'
                });
            }
            if(!user.authenticate(password)) {
                return done(null, false, {
                    message: 'incorrect password!'
                });
            }
            return done(null, user);
        });
    }
));

passport.use('org-local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    function(username, password, done) {
        Organization.findOne({
            username: username
        }, function(err, user) {
            if (err) return done(err);
            
            if (!user) {
                return done(null, false, {
                    message: 'username not found!'
                });
            }
            if(!user.authenticate(password)) {
                return done(null, false, {
                    message: 'incorrect password!'
                });
            }
            return done(null, user);
        });
    }
));

passport.use('vol-local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    function(username, password, done) {
        Volunteer.findOne({
            username: username
        }, function(err, user) {
            if (err) return done(err);
            
            if (!user) {
                return done(null, false, {
                    message: 'username not found!'
                });
            }
            if(!user.authenticate(password)) {
                return done(null, false, {
                    message: 'incorrect password!'
                });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, { _id: user._id, role: user.role });
});

passport.deserializeUser((login, done) => {
    if (login.role === 'User') {
        User.findById(login, function (err, user) {
            if (user)
                done(null, user);
            else
                done(err, { message: 'User Not Found!' })
        });
    }
    else if (login.role === 'Admin') {
        User.findById(login, (err, admin) => {
            if (admin)
                done(null, admin);
            else
                done(err, { message: 'Admin not found' })
        });
    }

    else if (login.role === 'Org') {
        Organization.findById(login, (err, org) => {
            if (org)
                done(null, onprogress);
            else
                done(err, { message: 'Org Not Found!' })
        });
    }
    else if (login.role === 'Vol') {
        Volunteer.findById(login, (err, vol) => {
            if (vol)
                done(null, vol);
            else
                done(err, { message: 'Vol Not Found!' })
        });
    }
    else {
        done({ message: 'No Entity Found!' }, null);
    }
});