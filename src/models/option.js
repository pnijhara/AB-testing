'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Option.ABTest = Option.belongsTo(models.ABTest);
    }
  }
  Option.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Option',
    }
  );
  return Option;
};
