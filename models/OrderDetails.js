const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
  };
  const OrderDetailsModel = sequelize.define("OrderDetails", attributes, options);
  return OrderDetailsModel;
};
