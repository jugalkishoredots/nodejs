"use strict";
const bcrypt = require("bcrypt-nodejs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert(
      "admins",
      [
        {
          firstName: "Admin",
          lastName: "User",
          email: "admin@example.com",
          password: bcrypt.hashSync("Dots@123"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('admins', null, {});
  },
};
