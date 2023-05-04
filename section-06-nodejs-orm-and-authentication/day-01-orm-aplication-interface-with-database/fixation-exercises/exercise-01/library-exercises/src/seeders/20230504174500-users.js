'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Senhor dos Anéis: A Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        pageQuantity: 576,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Senhor dos Anéis: As Duas Torres',
        author: 'J. R. R. Tolkien',
        pageQuantity: 388,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};