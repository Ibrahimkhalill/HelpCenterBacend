const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const SoftwareName = sequelize.define('SoftwareName', {
    id_software_name: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  });

  return SoftwareName;
};
