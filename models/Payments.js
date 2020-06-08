const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        paymentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        paymentType: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        processed: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
        }
    };
    const options = {
        timestamps: false,
        tableName: "Payments",
        indexes: []
    };
    const PaymentsModel = sequelize.define("Payments", attributes, options);
    return PaymentsModel;
};