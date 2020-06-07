const express = require('express');
const app = express.Router();
const models = require('../models');
const sequelize = models.sequelize;
const Sequelize = models.Sequelize;
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const secretKey = 'ECPServer';

const authorize = (req, res, next) => {
    const header = req.headers.authorization;
    if (header) {
        const token = header.split(' ')[1];
        jwt.verify(token, secretKey, (err, usr) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = usr;
            next();
        });
    } else {
        res.redirect('/login');
    }
}

app.post('/signup', (req, res) => {
    // sequelize transaction and query
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            models.Customers.create({
                contactName: req.body.name,
                email: req.body.email,
                password: hash
            });
            res.redirect('/login');
        });
    });
});

app.post('/login', (req, res) => {
    models.Sellers.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        const pw = result.password;
        bcrypt.compare(req.body.password, pw, (err, match) => {
            if (match) {
                jwt.sign({
                        sellID: result.sellerID
                    }, secretKey, {
                        expiresIn: "1h"
                    },
                    function(err, token) {
                        if (token) {
                            console.log({
                                token
                            });
                            return res.send({
                                token
                            });
                        } else {
                            return res.sendStatus(401);
                        }
                    });
            } else {
                return res.sendStatus(403);
            }
        });
    });
});

app.post('/products', authorize, (req, res) => {
    const {categoryID, stock, sp, msrp} = req.body;
    models.Products.create({
            sellerID: req.user.sellID,
            categoryID: categoryID,
            quantityPerUnit: stock,
            unitPrice: sp,
            MSRP: msrp,
            name: req.body.name,
            description: req.body.desc
    });
    return res.redirect('/');
});

app.get('/products', authorize, (req, res)=> {
    models.Products
         .findAll({
                 attributes: {
                    exclude: ["sellerID", "SKUID"]
                 },
                 where: {
                    sellerID: req.user.sellID
                 }
            })
        .then((result)=> {
            if (result) { res.send({prodList: result.map(el=> el.get({plain: true}))}); }
            else {  res.sendStatus(404); }
    });
});

app.get('/orders', authorize, (req, res)=> {
    models.OrderDetails.findAll({
        attributes: {
            include: ["price", "orderID", "total", "price", "quantity",
                    "shipDate", "billDate", "fulfilled"    
            ] 
        },
        where: {
            sellerID: req.user.sellID
        },
        include : [models.Products],
        order: [['fulfilled', 'ASC']]
    }).then((result)=> {
        if (result) {
            return res.send({ orders: result.map(el=>el.get({plain: true})) });
        }
        else { return res.sendStatus(500); }
    });
});

app.put('/orders', authorize, (req, res)=> {
    const recToken = req.body;
    var upToken = {};
    for (var key in recToken) {
        if (recToken[key] !== null){
                upToken[key] = recToken[key];
        }
    }
    models
       .OrderDetails
       .update(upToken, {
            where: {
                    orderID: req.body.orderID,
            }
       })
       .then( (result)=> {
            if (result) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(427);
            }
       });
});

// Get 
// app.get('/', getSeller);
// app.get('/tracking/:id', trackInfo);

module.exports = app;
