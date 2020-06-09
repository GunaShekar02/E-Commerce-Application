'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return  queryInterface.bulkInsert('Customers', [{
        contactName: 'John Doe',
        billingAddress: "Flat 208, Block 22A, Manekshaw Marg",
        city: "New Delhi",
        state: "New Delhi",
        PIN: "234563",
        phone: 987654567,
        email: "johndoe123@gmail.com",
        password: "$2a$10$181DAihc4Hu/H/tczP5II.jG/kaNc1roLDzKkVeMq7jO.Pg08aKbu" 
              // is the password 12312dx
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Customers', null, {});
  }
};
