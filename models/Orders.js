const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "orderID"
    },
    customerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "customerID",
      references: {
        key: "customerID",
        model: "Customers_model"
      }
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
    paymentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "paymentID",
      references: {
        key: "paymentID",
        model: "Payments_model"
      }
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderDate"
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
    expectedDelivery: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "expectedDelivery"
    },
    shipperID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shipperID",
      references: {
        key: "shipperID",
        model: "Shippers_model"
      }
    },
    delivered: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "delivered"
    },
    paid: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "paid"
    },
    payment_amount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_amount"
    }
  };
  const options = {
    tableName: "Orders",
    comment: "",
    indexes: [{
      name: "customerID",
      unique: false,
      type: "BTREE",
      fields: ["customerID"]
    }, {
      name: "paymentID",
      unique: false,
      type: "BTREE",
      fields: ["paymentID"]
    }, {
      name: "shipperID",
      unique: false,
      type: "BTREE",
      fields: ["shipperID"]
    }]
  };
  const OrdersModel = sequelize.define("Orders_model", attributes, options);
  return OrdersModel;
};