const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const formController = require('./src/controllers/formController');

route.get('/', homeController.index);

route.get('/form', formController.index);
route.post('/form', formController.form);

module.exports = route;
