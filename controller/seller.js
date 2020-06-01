const express=require('express');
const app=express.Router();
const models=require('../models');

// Get 
app.get('/', getSeller);
app.get('/tracking/:id', trackInfo);

// Post
app.post('/products', addProducts);
app.post('/orders', newOrder);

// Put

// Delete

module.exports = app;
