'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'status', {
      type: Sequelize.STRING,
      allowNUll: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'status');
  }
};
