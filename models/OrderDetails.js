const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "orderID",
        model: "Orders"
      }
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "productID",
        model: "Products"
      }
    },
    orderDetID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.BIGINT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
    shipDate: {
      type: DataTypes.DATE,
    },
    billDate: {
      type: DataTypes.DATE,
    },
    fulfilled: {
      type: DataTypes.INTEGER(1),
    }
  };
  const options = {
    tableName: "OrderDetails",
    comment: "",
    timestamps: false,
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
  const OrderDetailsModel = sequelize.define("OrderDetails", attributes, options);
  return OrderDetailsModel;
};
