var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');
var Volunteer = require('../models/volunteers');
var Organization = require('../models/organizations');

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');

exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey,
        { expiresIn: 3600 });
};


var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

passport.use('user-jwt', new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('jwt-payload: ', jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        else if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));

passport.use('org-jwt', new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('jwt-payload: ', jwt_payload);
    Organization.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        else if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));

passport.use('vol-jwt', new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('jwt-payload: ', jwt_payload);
    Volunteer.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        else if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));
passport.use('user-local', new LocalStrategy(User.authenticate()));

passport.use('org-local', new LocalStrategy(Organization.authenticate()));

passport.use('vol-local', new LocalStrategy(Volunteer.authenticate()));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((login, done) => {
    if (login.role === 'User') {
        User.deserializeUser();
    }
    else if (login.role === 'Admin') {
        User.deserializeUser();
    }

    else if (login.role === 'Org') {
        Organization.deserializeUser();
    }
    else if (login.role === 'Vol') {
        Volunteer.deserializeUser();
    }
    else {
        done({ message: 'No Entity Found!' }, null);
    }
});

exports.verifyUser = passport.authenticate('user-jwt', { session: false });

exports.verifyOrg = passport.authenticate('org-jwt', { session: false });

exports.verifyVol = passport.authenticate('vol-jwt', { session: false });

exports.verifyAdmin = (req, res, next) => {
    if (req.user.role === 'Admin') {
        next();
    }
    else {
        var err = new Error('Unauthorized!');
        err.status = 401;
        next(err);
    }
}

exports.verifyIsOrgApproved = (req, res, next) => {
    if (req.user.isApproved === true) {
        next();
    }
    else {
        var err = new Error('Unauthorized!');
        err.status = 401;
        next(err);
    }
}