'use strict';
const bcrypt 			= require('bcryptjs');
const jwt           	= require('jsonwebtoken');
const {TE, to}          = require('../services/util.service');
const CONFIG            = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('UserRole', {
          userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
          },
          roleCode: {
            type: DataTypes.STRING(50),
            allowNull: false
          }
      }, {
        tableName: 'user_roles'
      });


    Model.associate = function(models){
        this.user = this.belongsTo(models.User, {
            foreignKey: 'userId'
        });
        this.role = this.belongsTo(models.Role, {
            foreignKey: 'roleCode',
            otherKey: 'code'
        });
    };

    return Model;
};
