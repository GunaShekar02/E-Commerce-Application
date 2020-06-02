const express=require('express');
const app=express.Router();
const models=require('../models');
const fs=require('path');
const view_folder = path.resolve('../views');
const bcrypt=require('bcryptjs');
const uuid=require('uuid');
const jwt=require('jsonwebtoken');

app.post('/signup', (req, res) => {
        const { name, emil, password } = req.body
        // sequelize query
        models.Customers.create({
                contactName: name,
                email: emil,
                password: bcrypt.hashSync(password);
        });
        res.redirect('/');
});

app.post('/login', (req, res, next) => {});







// Get
app.get('/', dashBoard);
app.get('/tracking/:id', trackInfo);
app.get('/orders', getOrders);
app.get('/orders/:id', getOrder);
app.get('/addresses', getAddr);
    
//Post
app.post('/cart', addToCart);
app.post('/order', makeOrder);
    
// Put
app.put('/cred_up', updateCreds);
app.put('/addresses/:id', updateAddress);

// Delete 

module.exports = app;
