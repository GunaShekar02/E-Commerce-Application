const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        customerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        contactName: {
            type: DataTypes.STRING(50),
            validate: {
                isAlpha: true,
                notEmpty: true
            }
        },
        billingAddress: {
            type: DataTypes.STRING(100),
        },
        deliveryAddress: {
            type: DataTypes.STRING(200),
        },
        city: {
            type: DataTypes.STRING(30),
        },
        state: {
            type: DataTypes.STRING(40),
        },
        PIN: {
            type: DataTypes.STRING(10),
        },
        phone: {
            type: DataTypes.BIGINT,
        },
        email: {
            type: DataTypes.STRING(150),
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        payerID: {
            type: DataTypes.STRING(150),
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        regDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        password: {
            type: DataTypes.STRING(500),
        }
    };
    const options = {
        tableName: "Customers",
        comment: "",
        indexes: [],
        timestamps: false
    };
    const CustomersModel = sequelize.define("Customers", attributes, options);
    return CustomersModel;
};
