'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Category", deps: []
 * createTable "Customers", deps: []
 * createTable "OrderDetails", deps: []
 * createTable "Orders", deps: []
 * createTable "Payments", deps: []
 * createTable "Products", deps: []
 * createTable "Seller", deps: []
 * createTable "Shippers", deps: []
 * addIndex "orderID" to table "OrderDetails"
 * addIndex "productID" to table "OrderDetails"
 * addIndex "customerID" to table "Orders"
 * addIndex "paymentID" to table "Orders"
 * addIndex "shipperID" to table "Orders"
 * addIndex "sellerID" to table "Products"
 * addIndex "categoryID" to table "Products"
 *
 **/

var info = {
    "revision": 1,
    "name": "ecp",
    "created": "2020-06-02T11:56:55.874Z",
    "comment": ""
};

var migrationCommands = [{
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
            ["shipperID"],
            {
                "indexName": "shipperID"
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
