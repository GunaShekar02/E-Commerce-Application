const express = require('express');
const app = express.Router();
const models = require('../models');
const sequelize = models.sequelize;
const Sequelize = models.Sequelize;

const buyer = require('./buyer');
const seller = require('./seller');
//const admin = require('./admin');

//app.get('/', getHome);
app.use('/buyer', buyer); // Buyer Specific
app.use('/seller', seller); // Seller Specific

// General Routes
app.get('/products/:Categoryid/:count', (req, res) => {
    const categoryID = req.params.CategoryID;
    const count = req.params.count == null ? req.params.count : 0;
    var options = {};
    options["offset"] = count * 10;
    options["limit"] = 10;
    if (categoryID != null) {
        options["where"] = {
            categoryID: categoryID
        };
    }
    models.Products.findAll(options).then((result) => {
        if (result) {
            return res.send({
                products: result.map(el => el.get({
                    plain: true
                }))
            });
        } else {
            return res.send({
                products: []
            });
        }
    });
});

app.get('/categories/:count', (req, res) => {
    const page = req.params.count == null ? req.params.count : 0;
    models.Category.findAll({
        limit: 10,
        offset: count * 10
    }).then((result) => {
        if (result) {
            return res.send({
                categories: result.map(el => el.get({
                    plain: true
                }))
            });
        } else {
            return res.sendStatus(422);
        }
    });
});

module.exports = app;
