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
    m_option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "m_option_id"
    }
  };
  const options = {
    tableName: "m_option_values",
    comment: "",
    indexes: [{
      name: "m_option_values_m_option_id_foreign",
      unique: false,
      type: "BTREE",
      fields: ["m_option_id"]
    }]
  };
  const MOptionValuesModel = sequelize.define("m_option_values_model", attributes, options);
  return MOptionValuesModel;
};