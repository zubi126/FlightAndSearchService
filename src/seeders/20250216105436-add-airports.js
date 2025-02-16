'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: 'kempegowda international Airport',
        cityId: 1,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mysoru international Airport',
        cityId: 4,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mengluru international Airport',
        cityId: 3,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'indra gandhi international Airport',
        cityId: 7,
        createdAt:new Date(),
        updatedAt: new Date()
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
