const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        shipperID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        companyName: {
            type: DataTypes.STRING(150),
        },
        phone: {
            type: DataTypes.BIGINT,
        }
    };
    const options = {
        tableName: "Shippers",
        comment: "",
        indexes: [],
        timestamps: false
    };
    const ShippersModel = sequelize.define("Shippers", attributes, options);
    return ShippersModel;
};