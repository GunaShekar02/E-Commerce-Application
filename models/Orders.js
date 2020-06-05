const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerID: {
      type: DataTypes.INTEGER,
      references: {
        key: "customerID",
        model: "Customers"
      }
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    paymentID: {
      type: DataTypes.INTEGER,
      references: {
        key: "paymentID",
        model: "Payments"
      }
    },
    orderDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    shipDate: {
      type: DataTypes.DATE,
    },
    expectedDelivery: {
      type: DataTypes.DATE,
    },
    shipperID: {
      type: DataTypes.INTEGER,
      references: {
        key: "shipperID",
        model: "Shippers"
      }
    },
    delivered: {
      type: DataTypes.INTEGER(1),
    },
    paid: {
      type: DataTypes.INTEGER(1),
    },
    payment_amount: {
      type: DataTypes.BIGINT,
    }
  };
  const options = {
    timestamps: false,
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
  const OrdersModel = sequelize.define("Orders", attributes, options);
  return OrdersModel;
};
