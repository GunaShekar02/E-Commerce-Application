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
    product_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_type_id"
    },
    m_option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "m_option_id"
    },
    m_option_value_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "m_option_value_id"
    }
  };
  const options = {
    tableName: "product_type_m_options",
    comment: "",
    indexes: [{
      name: "product_type_m_options_product_type_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["product_type_id"]
    }, {
      name: "product_type_m_options_m_option_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["m_option_id"]
    }, {
      name: "product_type_m_options_m_option_value_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["m_option_value_id"]
    }]
  };
  const ProductTypeMOptionsModel = sequelize.define("product_type_m_options_model", attributes, options);
  return ProductTypeMOptionsModel;
};