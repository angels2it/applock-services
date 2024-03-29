const {TE, to}              = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Imei', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    tableName: 'imei'
  });

  Model.associate = function(models){
  };

  return Model;
};