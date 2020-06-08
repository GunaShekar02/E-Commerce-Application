const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryName: {
            type: DataTypes.STRING(200),
        },
        Description: {
            type: DataTypes.STRING(400),
        },
        Active: {
            type: DataTypes.INTEGER(1),
        }
    };
    const options = {
        tableName: "Category",
        indexes: [],
        timestamps: false
    };
    const CategoryModel = sequelize.define("Category", attributes, options);
    return CategoryModel;
};