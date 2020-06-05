'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Cart", deps: []
 * createTable "Category", deps: []
 * createTable "Customers", deps: []
 * createTable "OrderDetails", deps: []
 * createTable "Orders", deps: []
 * createTable "Payments", deps: []
 * createTable "Products", deps: []
 * createTable "Seller", deps: []
 * createTable "Shippers", deps: []
 * addIndex "productID" to table "Cart"
 * addIndex "customerID" to table "Cart"
 * addIndex "productID" to table "OrderDetails"
 * addIndex "orderID" to table "OrderDetails"
 * addIndex "shipperID" to table "Orders"
 * addIndex "paymentID" to table "Orders"
 * addIndex "customerID" to table "Orders"
 * addIndex "categoryID" to table "Products"
 * addIndex "sellerID" to table "Products"
 *
 **/

var info = {
    "revision": 1,
    "name": "ecp",
    "created": "2020-06-05T12:25:30.965Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Cart",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Category",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Customers",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "OrderDetails",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Orders",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Payments",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Products",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Seller",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Shippers",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Cart",
            ["productID"],
            {
                "indexName": "productID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Cart",
            ["customerID"],
            {
                "indexName": "customerID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "OrderDetails",
            ["productID"],
            {
                "indexName": "productID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "OrderDetails",
            ["orderID"],
            {
                "indexName": "orderID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Orders",
            ["shipperID"],
            {
                "indexName": "shipperID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Orders",
            ["paymentID"],
            {
                "indexName": "paymentID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Orders",
            ["customerID"],
            {
                "indexName": "customerID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Products",
            ["categoryID"],
            {
                "indexName": "categoryID"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Products",
            ["sellerID"],
            {
                "indexName": "sellerID"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
