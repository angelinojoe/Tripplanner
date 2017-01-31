var Sequelize = require('sequelize');

var db = require('./db');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
})

module.exports = Hotel;

