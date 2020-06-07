const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
    timestamps: false
  };
  const CartModel = sequelize.define("Cart", attributes, options);
  return CartModel;
};
