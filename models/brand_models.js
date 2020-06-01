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
    brand_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "brand_id"
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    }
  };
  const options = {
    tableName: "brand_models",
    comment: "",
    indexes: [{
      name: "brand_models_brand_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["brand_id"]
    }, {
      name: "brand_models_product_type_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["product_type_id"]
    }]
  };
  const BrandModelsModel = sequelize.define("brand_models_model", attributes, options);
  return BrandModelsModel;
};