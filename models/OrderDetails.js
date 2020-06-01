const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderID",
      references: {
        key: "orderID",
        model: "Orders_model"
      }
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productID",
      references: {
        key: "productID",
        model: "Products_model"
      }
    },
    orderDetID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "orderDetID"
    },
    orderNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderNumber"
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantity"
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total"
    },
    shipDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shipDate"
    },
    billDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "billDate"
    },
    fulfilled: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fulfilled"
    }
  };
  const options = {
    tableName: "OrderDetails",
    comment: "",
    indexes: [{
      name: "orderID",
      unique: false,
      type: "BTREE",
      fields: ["orderID"]
    }, {
      name: "productID",
      unique: false,
      type: "BTREE",
      fields: ["productID"]
    }]
  };
  const OrderDetailsModel = sequelize.define("OrderDetails_model", attributes, options);
  return OrderDetailsModel;
};