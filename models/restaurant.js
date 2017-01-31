var Sequelize = require('sequelize');

var db = require('./db');

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    }
  }
});

module.exports = Restaurant;
