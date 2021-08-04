const express = require('express');
const Organizations = require('../models/organizations');
const organizationsRouter = express.Router();
organizationsRouter.use(express.json());

organizationsRouter.route('/')
    .get((req, res, next) => {
        Organizations.find({})
            .then((orgs) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(orgs);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        Organizations.create(req.body)
            .then((org) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(org);
            }, (err) => next(err))
            .catch((err) => next(err));    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Error! Operation Not Supported!');
    })

    .delete((req, res, next) => {
        Organizations.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));

    });

organizationsRouter.route('/:orgId')
    .get((req, res, next) => {
        Organizations.findById(req.params.orgId)
            .then((org) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(org);
            }, (err) => next(err))
            .catch((err) => next(err))
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Error! Operation Not Supported!');
    })

    .put((req, res, next) => {
        Organizations.findByIdAndUpdate(req.params.orgId, {
            $set: req.body
        }, { new: true })
            .then((org) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(org);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req, res, next) => {
        Organizations.findByIdAndRemove(req.params.orgId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = organizationsRouter;

