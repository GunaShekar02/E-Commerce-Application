const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    customerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "customerID",
        model: "Customers"
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
    price: {
      type: DataTypes.BIGINT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    }
  };
  const options = {
    tableName: "Cart",
    comment: "",
    timestamps: false,
    indexes: [{
      name: "customerID",
      unique: false,
      type: "BTREE",
      fields: ["customerID"]
    }, {
      name: "productID",
      unique: false,
      type: "BTREE",
      fields: ["productID"]
    }]
  };
  const CartModel = sequelize.define("Cart", attributes, options);
  return CartModel;
};
