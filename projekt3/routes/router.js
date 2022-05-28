const express = require('express');
const route = express.Router()

const services = require('../services/render');

/**
 * @description Root Route
 * @method GET/
 */

route.get('/',services.homeRoutes);

route.get('/add_pracownika', (req,res) => {
    res.render('add_pracownika');
})

module.exports = route