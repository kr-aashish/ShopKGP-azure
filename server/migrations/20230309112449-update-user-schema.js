'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'department');

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'department', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'unknown'
    });
  }
};
