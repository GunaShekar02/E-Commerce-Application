const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "productID"
    },
    SKUID: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SKUID"
    },
    sellerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sellerID",
      references: {
        key: "sellerID",
        model: "Seller_model"
      }
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "categoryID",
      references: {
        key: "categoryID",
        model: "Category_model"
      }
    },
    quantityPerUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantityPerUnit"
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "unitPrice"
    },
    MSRP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MSRP"
    }
  };
  const options = {
    tableName: "Products",
    comment: "",
    indexes: [{
      name: "sellerID",
      unique: false,
      type: "BTREE",
      fields: ["sellerID"]
    }, {
      name: "categoryID",
      unique: false,
      type: "BTREE",
      fields: ["categoryID"]
    }]
  };
  const ProductsModel = sequelize.define("Products_model", attributes, options);
  return ProductsModel;
};