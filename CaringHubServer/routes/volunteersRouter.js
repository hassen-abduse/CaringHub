const express = require('express');
const Volunteers = require('../models/volunteers');
const volunteersRouter = express.Router();
volunteersRouter.use(express.json());

volunteersRouter.route('/')
    .get((req, res, next) => {
        Volunteers.find({})
            .then((vols) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vols);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Error! Operation Not Supported!');
    })


    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Error! Operation Not Supported!');
    })

    .delete((req, res, next) => {
        Volunteers.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));

    });

volunteersRouter.route('/:volId')
    .get((req, res, next) => {
        Volunteers.findById(req.params.volId)
            .then((vol) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vol);
            }, (err) => next(err))
            .catch((err) => next(err))
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Error! Operation Not Supported!');
    })

    .put((req, res, next) => {
        Volunteers.findByIdAndUpdate(req.params.volId, {
            $set: req.body
        }, { new: true })
            .then((vol) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vol);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req, res, next) => {
        Volunteers.findByIdAndRemove(req.params.volId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

volunteersRouter.post('/register', (req, res, next) => {
    
})
module.exports = volunteersRouter;

