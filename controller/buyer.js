const express=require('express');
const app=express.Router();
const models=require('../models');

// Get
app.get('/buyer', getBuyer);
app.get('/buyer/tracking/:id', trackInfo);
app.get('/buyer/orders', getOrders);
app.get('/buyer/orders/:id', getOrder);
app.get('/buyer/addresses', getAddr);
    
//Post
app.post('/buyer/cart', addToCart);
app.post('/buyer/order', makeOrder);
    
// Put
app.put('/buyer/cred_up', updateCreds);
app.put('/buyer/addresses/:id', updateAddress);

// Delete 

module.exports = app;
