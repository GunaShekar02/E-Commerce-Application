const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        sellerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        companyName: {
            type: DataTypes.STRING(70),
            validate: {
                isAlpha: true,
                notEmpty: true
            }
        },
        contactName: {
            type: DataTypes.STRING(50),
            validate: {
                isAlpha: true,
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.STRING(100),
        },
        city: {
            type: DataTypes.STRING(30),
            validate: {
                isAlpha: true
            }
        },
        state: {
            type: DataTypes.STRING(40),
            validate: {
                isAlpha: true
            }
        },
        PIN: {
            type: DataTypes.STRING(10),
            validate: {
                isAlphanumeric: true
            }
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
        payeeID: {
            type: DataTypes.STRING(150),
            validate: {
                isAlphanumeric: true
            }
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        password: DataTypes.STRING(500)
    };
    const options = {
        timestamps: false,
        tableName: "Seller",
        comment: "",
        indexes: []
    };
    const SellerModel = sequelize.define("Seller", attributes, options);
    return SellerModel;
};
