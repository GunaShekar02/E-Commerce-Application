const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        name: DataTypes.STRING(500),
        description: DataTypes.STRING(2000),
        productID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        SKUID: {
            type: DataTypes.STRING(100),
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
    };
    const ProductsModel = sequelize.define("Products", attributes, options);
    return ProductsModel;
};