const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserLevelCompletion = sequelize.define('UserLevelCompletion',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      levelId: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
      modulesCompletion: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
      completionCriteria: { type: DataTypes.JSON, allowNull: true },
      score: { type: DataTypes.INTEGER, allowNull: true },
      deleteFlag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    },
    { tableName: 'user_level_completion' },
  );

  return UserLevelCompletion;
};
