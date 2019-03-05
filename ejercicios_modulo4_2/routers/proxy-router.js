'use strict';

const express = require('express');
const axios = require('axios');


const router = express.Router();


/**
 * Aqui definimos todas las rutas que estén bajo /api/proxy
 */
router.get('/proxy/pokemons', (req, res, next) => {
    /*get a API de terceros*/
    axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
    }).then((response => {
        res.send(response.data);
    })).catch((err) => {
        console.error('error', err);
        res.status(500).send();
    });
    next();
});

module.exports = router;