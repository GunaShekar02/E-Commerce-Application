const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    paymentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "paymentID"
    },
    paymentType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "paymentType"
    },
    processed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "processed"
    }
  };
  const options = {
    tableName: "Payments",
    comment: "",
    indexes: []
  };
  const PaymentsModel = sequelize.define("Payments_model", attributes, options);
  return PaymentsModel;
};