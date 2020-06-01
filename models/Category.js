const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "categoryID"
    },
    categoryName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "categoryName"
    },
    Description: {
      type: DataTypes.STRING(400),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Description"
    },
    Active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Active"
    }
  };
  const options = {
    tableName: "Category",
    comment: "",
    indexes: []
  };
  const CategoryModel = sequelize.define("Category_model", attributes, options);
  return CategoryModel;
};