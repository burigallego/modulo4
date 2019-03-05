'use strict';

const express = require('express');

const router = express.Router();

/**
 * Aqui definimos todas las rutas que estén bajo /api/tests
 */
router.get('/tests/test01', (req, res, next) => {
    console.log('recibí los siquientes query params', req.query);

    res.send(req.query);
    next();
});

router.get('/tests/test02', (req, res, next) => {
    console.log('recibí los siguientes query params', req.query);

    res.send(req.query);
    next();
});

module.exports = router;