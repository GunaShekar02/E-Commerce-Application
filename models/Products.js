const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    SKUID: {
      type: DataTypes.STRING(100),
    },
    sellerID: {
      type: DataTypes.INTEGER,
      references: {
        key: "sellerID",
        model: "Seller"
      }
    },
    categoryID: {
      type: DataTypes.INTEGER,
      references: {
        key: "categoryID",
        model: "Category"
      }
    },
    quantityPerUnit: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.INTEGER,
    },
    MSRP: {
      type: DataTypes.INTEGER,
    }
  };
  const options = {
          timestamps: false,
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
  const ProductsModel = sequelize.define("Products", attributes, options);
  return ProductsModel;
};
