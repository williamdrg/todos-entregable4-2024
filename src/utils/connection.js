const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false, dialectOptions: {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
} })

module.exports = sequelize;