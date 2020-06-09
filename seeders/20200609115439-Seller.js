'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Seller', [{
        companyName: 'ABC Corporation',
        contactName: 'Rupesh Matthew',
        address: '5, ABC HQ, Chandni Chowk',
        city: 'New Delhi',
        state: 'New Delhi',
        PIN: '123456',
        phone: 34567890,
        email: 'rupesh@abc.com',
        password: '$2a$10$181DAihc4Hu/H/tczP5II.jG/kaNc1roLDzKkVeMq7jO.Pg08aKbu' 
       // 12312dh is password
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
