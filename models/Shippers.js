const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    shipperID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "shipperID"
    },
    companyName: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyName"
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone"
    }
  };
  const options = {
    tableName: "Shippers",
    comment: "",
    indexes: []
  };
  const ShippersModel = sequelize.define("Shippers_model", attributes, options);
  return ShippersModel;
};