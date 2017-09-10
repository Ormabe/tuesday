'use strict';
module.exports = function(sequelize, DataTypes) {
  var NY13DVoters = sequelize.define('NY13DVoters', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    district: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    lastContact: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return NY13DVoters;
};