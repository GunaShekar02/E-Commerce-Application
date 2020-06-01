const express=require('express');
const app=express.Router();
const models=require('../models');

// Get 
app.get('/dashboard/seller', getSeller);
app.get('/dashboard/seller/tracking/:id', trackInfo);

// Post
app.post('/dashboard/seller/products', addProducts);
app.post('/dashboard/seller/orders', newOrder);

// Put

// Delete

module.exports = app;
