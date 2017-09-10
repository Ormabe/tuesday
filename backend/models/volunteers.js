'use strict';
module.exports = function(sequelize, DataTypes) {
  var Volunteers = sequelize.define('Volunteers', {
    ny13DVoterId: {
      type: DataTypes.INTEGER,
      field: 'ny13D_voter_id',
      references: {
        model: 'NY13DVoters',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      set: function (value) {
        this.setDataValue('firstName', value);
        this.setDataValue('midInit', value);
        this.setDataValue('lastName', value);
      },
      validate: {
        isNotComplete: function () {
          if (this.get('lastName') === undefined) {
            throw new Error ('Plese enter your last name');
          }
          if (this.get('firstName') === undefined) {
            throw new Error ('Plese enter your first name');
          }
        }
      },
      get: function () {
        if(this.get('midInit')){
          return (this.get('lastName') + ', ' + this.get('firstName') + ' ' + this.get('midInit'));
        } else {
          return (this.get('lastName') + ', ' + this.get('firstName'));
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'firstName',
      validate: {
        notEmpty: true
      }
    }, 
    midInit: {
      type: DataTypes.STRING,
      field: 'midInit',
      validate: {
        len: [0,1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'lastName',
      validate: {
        notEmpty: true
      }
    }, 
    dob: DataTypes.DATE,
    age: DataTypes.INTEGER,
    interests: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    district: DataTypes.BOOLEAN,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Volunteers;
};