const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_id"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_id"
    },
    option_value_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_value_id"
    }
  };
  const options = {
    tableName: "product_option_values",
    comment: "",
    indexes: [{
      name: "product_option_values_product_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }, {
      name: "product_option_values_option_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["option_id"]
    }, {
      name: "product_option_values_option_value_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["option_value_id"]
    }]
  };
  const ProductOptionValuesModel = sequelize.define("product_option_values_model", attributes, options);
  return ProductOptionValuesModel;
};