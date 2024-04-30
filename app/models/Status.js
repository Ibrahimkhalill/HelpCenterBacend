const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Status = sequelize.define('Status', {
    id_status: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  });

  return Status;
};
