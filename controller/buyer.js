const express = require('express');
const app = express.Router();
const models = require('../models');
const sequelize = models.sequelize;
const Sequelize = models.Sequelize;
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const validator = require('validator');

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
    models.Customers.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        const pw = result.password;
        bcrypt.compare(req.body.password, pw, (err, match) => {
            if (match) {
                jwt.sign({
                        custID: result.customerID
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

app.post('/cart', authorize, (req, res) => {
    const price = models
        .Products
        .findOne({
            where: {
                productID: req.body.productID
            },
            attributes: ["unitPrice", "MSRP"]
        })
        .then((result) => {
            models.Cart.create({
                customerID: req.user.custID,
                productID: req.body.productID,
                price: result.price,
                quantity: req.body.quantity,
                total: result.price * req.body.quantity
            }).then((result) => {
                if (result) {
                    res.sendStatus(200);
                }
            });
        });
});

app.get('/cart', authorize, (req, res) => {
    models
        .Cart
        .findAll({
            where: {
                customerID: res.user.custID
            },
            attributes: ["productID", "price", "quantity", "total"]
        })
        .map(el => el.get({
            plain: true
        })).then((result) => {
            if (results) {
                return res.send({
                    cartItems: results
                });
            } else {
                return res.sendStatus(404);
            }
        });
});

app.get('/orders', authorize, (req, res) => {
    const custID = req.user.custID;
    models
        .OrderDetails
        .findAll({
            attributes: [
                "orderID", "shipDate", "delivered",
                "paid", "payment_amount", "quantity",
                "price", "total", "fulfilled", "billDate"
            ],
            where: {
                customerID: custID
            },
            include: [models.Orders]
        })
        .then((results) => {
            if (results) {
                return res.send({
                    orderList: results.map(el => el.get({
                        plain: true
                    }))
                });
            } else {
                return res.sendStatus(500);
            }
        });
});

app.get('/orders/:id', authorize, (req, res) => {
    models
        .Orders
        .findOne({
            where: {
                orderID: req.params.id
            }
        }).then((result) => {
            if (result) {
                res.send(result.get({
                    plain: true
                }));
            } else {
                res.sendStatus(404);
            }
        });
});

app.get('/addresses', authorize, (req, res) => {
    models
        .Orders
        .findOne({
            where: {
                customerID: req.user.custID
            },
            attributes: ["deliveryAddress",
                "billingAddress", "PIN",
                "state", "city"
            ]
        }).then((result) => {
            if (result) {
                return res.send(result.get({
                    plain: true
                }));
            }
        });
});

app.get('/tracking/:id', authorize, (req, res) => {
    models
        .OrderDetails
        .findOne({
            where: {
                [Sequelize.and]: [{
                        orderID: req.params.id
                    },
                    {
                        fulfilled: 0
                    }
                ]
            },
            attributes: ["shipDate", "billDate"]
        }).then((result) => {
            if (result) {
                res.send(result.get({
                    plain: true
                }));
            } else {
                res.sendStatus(500);
            }
        });
});

/*app.get('/', dashBoard);
   
//Post
app.post('/order', authorize, makeOrder);
    
// Put
app.put('/cred_up', authorize, updateCreds);
app.put('/addresses/:id', authorize, updateAddress);

// Delete
*/
module.exports = app;