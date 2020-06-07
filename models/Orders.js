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
    orderNumber: {
      type: DataTypes.INTEGER,
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
  };
  const OrdersModel = sequelize.define("Orders", attributes, options);
  return OrdersModel;
};
