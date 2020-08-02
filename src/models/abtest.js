'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ABTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ABTest.Options = ABTest.hasMany(models.Option);
    }
  }
  ABTest.init(
    {
      name: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'ABTest',
    }
  );
  return ABTest;
};
