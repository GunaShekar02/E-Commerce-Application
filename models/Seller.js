const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    sellerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    companyName: {
      type: DataTypes.STRING(70),
    },
    contactName: {
      type: DataTypes.STRING(50),
    },
    address: {
      type: DataTypes.STRING(100),
    },
    city: {
      type: DataTypes.STRING(30),
    },
    state: {
      type: DataTypes.STRING(40),
    },
    PIN: {
      type: DataTypes.STRING(10),
    },
    phone: {
      type: DataTypes.BIGINT,
    },
    email: {
      type: DataTypes.STRING(150),
    },
    payeeID: {
      type: DataTypes.STRING(150),
    },
    regDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    password : DataTypes.STRING(500)
  };
  const options = {
          timestamps: false, 
          tableName: "Seller",
    comment: "",
    indexes: []
  };
  const SellerModel = sequelize.define("Seller", attributes, options);
  return SellerModel;
};
