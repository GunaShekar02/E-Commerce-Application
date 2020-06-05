const express = require('express');
const app = express();
const models = require('../models');

const buyer = require('./buyer');
const seller = require('./seller');
const admin = require('./admin');

app.get('/', getHome);
app.use('/buyer', buyer); // Buyer Specific
app.use('/seller', seller); // Seller Specific
app.use('/admin', admin); // Admin Specific

// General Routes


module.exports = app;