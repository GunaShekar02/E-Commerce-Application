'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// foreign key attachments.

db.Seller.hasMany(db.Products, {
    foreignKey: "sellerID"   
});

db.Category.hasMany(db.Products, {
    foreignKey: "categoryID"
});

db.Products.hasMany(db.OrderDetails, {
    foreignKey: "productID"
});

db.Orders.hasOne(db.OrderDetails, {
    foreignKey: "orderID"
});

db.Shippers.hasMany(db.Orders, {
    foreignKey: "shipperID"
});

db.Payments.hasOne(db.Orders, {
    foreignKey: "paymentID"
});

db.Customers.hasMany(db.Orders, {
    foreignKey: "customerID"
});

db.Customers.hasOne(db.Cart, {
    foreignKey: "customerID"
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
