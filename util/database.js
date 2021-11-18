const Sequelize = require('sequelize');

const sequelize = new Sequelize('bincomphptest', 'root', 'ToyosiOlaSQL11!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
