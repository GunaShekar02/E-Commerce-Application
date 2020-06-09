'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Category', [{
        categoryName: "General Purpose Goods",
        Description: "Common use goods that are usable in miscellaneous areas.", 
        Active : true
    }]);  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Category', null, {});
  }
};
