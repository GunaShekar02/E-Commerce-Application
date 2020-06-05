const express=require('express');
const app=express.Router();
const models=require('../models');
const sequelize=models.sequelize;
const bcrypt=require('bcryptjs');
const uuid=require('uuid');
const jwt=require('jsonwebtoken');

const secretKey = 'ECPServer';

const authorize = (req, res, next) => {
    const header = req.headers.authorization;
    if (header) {
        const token = header.split(' ')[1];
        jwt.verify(token, secretKey, (err, usr) => {
            if (err) { return res.sendStatus(403); }
            req.user = usr;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

app.post('/signup', (req, res) => {
        // sequelize transaction and query
        bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function (err, hash) {
                    models.Customers.create({
                            contactName: req.body.name,
                            email: req.body.email,
                            password : hash 
                    });
                    res.redirect('/login');
                }); 
        });
});

app.post('/login', (req, res) => {
        models.Customers.findOne({
                             where: {  email: req.body.email } 
        }).then( (result) => {
             const pw = result.password;
             bcrypt.compare(req.body.password, pw, (err, match) => {
                if (match) {
                    jwt.sign({custID: result.customerID }, secretKey,
                             {expiresIn : "1h"},
                             function(err, token) {
                                if (token) {
                                        console.log({token});
                                        return res.send({token});
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
                .then((result) => 
                        { 
                     models.Cart.create({
                            customerID: req.user.custID,
                            productID: req.body.productID,
                            price: result.price,
                            quantity: req.body.quantity,
                            total: result.price * req.body.quantity
                        }).then((result)=> 
                                {if (result) {res.sendStatus(200);}}); 
                });
});

app.get('/orders', authorize, async (req, res) => {
    const custID = req.user.custID;
    const results = await models
                        .OrderDetails
                        .findAll({ where : { customerID: custID }, 
                                  include : [models.Orders] })
                        .map(el => el.get({plain : true}));
    res.send({orderList: results});
});


/*app.get('/', dashBoard);
app.get('/tracking/:id', authorize, trackInfo);
*/
/*
app.get('/orders/:id', authorize, async (req, res) => {
    const result = await models
                       .Orders
                       .findOne({ where: { orderID : req.params.id }});
    // do some processing and send values.
});

app.get('/addresses', authorize, async (req, res) => {
    const result = await models
                       .Orders
                       .findOne({ where: { customerID: req.user.custID }});
    // do something with result.Address, result.PIN, result.City, result.State.
});
    
//Post
app.post('/order', authorize, makeOrder);
    
// Put
app.put('/cred_up', authorize, updateCreds);
app.put('/addresses/:id', authorize, updateAddress);

// Delete 
*/
module.exports = app;
