const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("Service", {
    id_service: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    service_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  });

  return Service;
};
