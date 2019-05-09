'use strict';
const bcrypt 			= require('bcryptjs');
const jwt           	= require('jsonwebtoken');
const {TE, to}          = require('../services/util.service');
const CONFIG            = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Role', {
        code: {
          type: DataTypes.STRING(50),
          allowNull: false,
          primaryKey: true
        },
        description: {
          type: DataTypes.STRING(200),
          allowNull: true
        }
      }, {
        tableName: 'roles'
      });
    Model.associate = function(models){
    };

    return Model;
};
