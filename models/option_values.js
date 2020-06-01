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
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_id"
    }
  };
  const options = {
    tableName: "option_values",
    comment: "",
    indexes: [{
      name: "option_values_option_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["option_id"]
    }]
  };
  const OptionValuesModel = sequelize.define("option_values_model", attributes, options);
  return OptionValuesModel;
};