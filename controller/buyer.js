const express=require('express');
const app=express.Router();
const models=require('../models');

// Get

app.get('/:id', function (req, res) {
    // get buyer specific dashboard
    custID = req.params.id;
    // some data fetch operations from models, then
    // then template for dashboard is rendered.
});

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
